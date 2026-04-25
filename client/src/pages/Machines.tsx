import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Filter } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Machines() {
  const [machines, setMachines] = useState<any[]>([]);
  const [filteredMachines, setFilteredMachines] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const machinesQuery = trpc.machines.getAll.useQuery();

  useEffect(() => {
    if (machinesQuery.data) {
      setMachines(machinesQuery.data);
      setFilteredMachines(machinesQuery.data);
    }
  }, [machinesQuery.data]);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredMachines(machines);
    } else {
      setFilteredMachines(machines.filter((m) => m.category === selectedCategory));
    }
  }, [selectedCategory, machines]);

  const categories = [
    { value: "all", label: "All Machines" },
    { value: "semi-automatic", label: "Semi-Automatic" },
    { value: "fully-automatic", label: "Fully-Automatic" },
    { value: "mobile", label: "Mobile/On-Site" },
    { value: "paver", label: "Paver & Interlocking" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Machine Catalog</h1>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl">
          Explore our complete range of concrete block making equipment, from semi-automatic to fully-automatic systems.
        </p>

        {/* Filter Section */}
        <div className="mb-12 flex items-center gap-4">
          <Filter className="h-5 w-5 text-slate-600" />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Machines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMachines.length > 0 ? (
            filteredMachines.map((machine) => (
              <Card key={machine.id} className="border-0 shadow-sm hover:shadow-lg transition-all">
                {machine.imageUrl && (
                  <div className="h-64 bg-slate-200 overflow-hidden rounded-t-lg">
                    <img
                      src={machine.imageUrl}
                      alt={machine.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-lg">{machine.name}</CardTitle>
                      <p className="text-sm text-slate-600 font-medium">{machine.model}</p>
                    </div>
                    <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                      {machine.category === "semi-automatic"
                        ? "Semi-Auto"
                        : machine.category === "fully-automatic"
                          ? "Fully-Auto"
                          : machine.category === "mobile"
                            ? "Mobile"
                            : "Paver"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-6">{machine.description}</p>

                  <div className="space-y-3 mb-6 text-sm">
                    {machine.outputPerHour && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Output:</span>
                        <span className="font-semibold text-slate-900">{machine.outputPerHour}</span>
                      </div>
                    )}
                    {machine.power && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Power:</span>
                        <span className="font-semibold text-slate-900">{machine.power}</span>
                      </div>
                    )}
                    {machine.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Dimensions:</span>
                        <span className="font-semibold text-slate-900">{machine.dimensions}</span>
                      </div>
                    )}
                    {machine.weight && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Weight:</span>
                        <span className="font-semibold text-slate-900">{machine.weight}</span>
                      </div>
                    )}
                  </div>

                  {machine.price && (
                    <p className="text-2xl font-bold text-slate-900 mb-6">
                      ${parseFloat(machine.price).toLocaleString()}
                    </p>
                  )}

                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Request Quote
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Rent Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-slate-600">Loading machines...</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect machine for your specific needs and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
