export type BuilderStep = "destination" | "flights" | "hotel" | "tours" | "review";

export interface PackageData {
    destination: string | null;
    flight: any | null;
    hotel: any | null;
    tours: any[];
    travelers: number;
    dates: { start: string | null; end: string | null };
}

export const steps: { id: BuilderStep; label: string }[] = [
    { id: "destination", label: "Destination" },
    { id: "flights", label: "Select Flights" },
    { id: "hotel", label: "Choose Hotel" },
    { id: "tours", label: "Add Tours" },
    { id: "review", label: "Review Trip" }
];
