import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";
import { useLocation } from "wouter";

export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const [location, setLocation] = useLocation();
  const [leads, setLeads] = useState<any[]>([]);

  const leadsQuery = trpc.leads.getAll.useQuery(undefined, {
    enabled: user?.role === "admin",
  });

  const updateStatusMutation = trpc.leads.updateStatus.useMutation();
  const deleteMutation = trpc.leads.delete.useMutation();

  useEffect(() => {
    if (leadsQuery.data) {
      setLeads(leadsQuery.data);
    }
  }, [leadsQuery.data]);

  // Redirect if not admin
  if (!authLoading && user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="border-0 shadow-sm max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-6">
              You don't have permission to access the admin dashboard. Only the owner can view leads.
            </p>
            <Button onClick={() => setLocation("/")} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const handleStatusChange = async (leadId: number, newStatus: string) => {
    try {
      await updateStatusMutation.mutateAsync({
        id: leadId,
        status: newStatus as any,
      });
      setLeads((prev) =>
        prev.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus } : lead))
      );
      toast.success("Lead status updated");
    } catch (error: any) {
      toast.error(error.message || "Failed to update status");
    }
  };

  const handleDelete = async (leadId: number) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;

    try {
      await deleteMutation.mutateAsync({ id: leadId });
      setLeads((prev) => prev.filter((lead) => lead.id !== leadId));
      toast.success("Lead deleted");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete lead");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
        <p className="text-slate-600 mb-12">Manage all submitted leads and inquiries</p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-slate-600">Total Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-slate-900">{leads.length}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-slate-600">New</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-orange-500">
                {leads.filter((l) => l.status === "new").length}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-slate-600">Contacted</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-500">
                {leads.filter((l) => l.status === "contacted").length}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-slate-600">Qualified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-500">
                {leads.filter((l) => l.status === "qualified").length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Leads Table */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>All Leads</CardTitle>
          </CardHeader>
          <CardContent>
            {leadsQuery.isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
              </div>
            ) : leads.length === 0 ? (
              <p className="text-center text-slate-600 py-12">No leads yet</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell className="font-semibold">{lead.name}</TableCell>
                        <TableCell>{lead.company}</TableCell>
                        <TableCell className="text-sm">{lead.email}</TableCell>
                        <TableCell className="text-sm">{lead.phone}</TableCell>
                        <TableCell>
                          <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                            {lead.interestType}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Select value={lead.status} onValueChange={(val) => handleStatusChange(lead.id, val)}>
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="qualified">Qualified</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell className="text-sm">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(lead.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
