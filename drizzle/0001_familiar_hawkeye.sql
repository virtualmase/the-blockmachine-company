CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`company` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`message` text,
	`interestType` varchar(50) NOT NULL,
	`status` enum('new','contacted','qualified','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `machines` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`model` varchar(100) NOT NULL,
	`category` varchar(50) NOT NULL,
	`description` text,
	`outputPerHour` varchar(100),
	`power` varchar(100),
	`dimensions` varchar(100),
	`weight` varchar(100),
	`compatibleMolds` text,
	`price` decimal(10,2),
	`imageUrl` text,
	`brochureUrl` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `machines_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rentals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`machineId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`company` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`rentalType` varchar(50) NOT NULL,
	`startDate` timestamp,
	`endDate` timestamp,
	`message` text,
	`status` enum('pending','approved','rejected','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rentals_id` PRIMARY KEY(`id`)
);
