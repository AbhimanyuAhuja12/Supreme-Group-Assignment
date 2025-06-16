export type VehicleType = "passenger" | "commercial";

export interface FeatureItem {
    title: string;
    image: string;
    video: string;
}

export interface UseFeatureSectionReturn {
    type: VehicleType;
    setType: (type: VehicleType) => void;
    features: FeatureItem[];
}

const FeaturedData: Record<VehicleType, FeatureItem[]> = {
    passenger: [
        { 
            title: "Complete body", 
            image: "/assets/images/passenger-vehicles/1.png", 
            video: "/assets/videos/passenger-vehicles/Front.mp4" 
        },
        { 
            title: "Cabin", 
            image: "/assets/images/passenger-vehicles/2.png", 
            video: "/assets/videos/passenger-vehicles/Cabin.mp4" 
        },
        { 
            title: "Trunk", 
            image: "/assets/images/passenger-vehicles/3.png", 
            video: "/assets/videos/passenger-vehicles/Trunk.mp4" 
        },
        { 
            title: "Exterior", 
            image: "/assets/images/passenger-vehicles/4.png", 
            video: "/assets/videos/passenger-vehicles/Exterior.mp4" 
        },
    ],
    commercial: [
        { 
            title: "Complete Body", 
            image: "", 
            video: "/assets/videos/commercial-vehicles/Alpha.mp4" 
        }
    ],
};

export { FeaturedData };
export default FeaturedData;