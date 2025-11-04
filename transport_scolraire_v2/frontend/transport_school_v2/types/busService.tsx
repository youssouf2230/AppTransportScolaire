export type Driver = {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    licenseNumber: string;
    bus?: Bus;
};

export type Bus = {
    id: number;
    registrationNumber: string;
    capacityLimits: number;
    status: string;
    urlImage: string;
    driver?: Driver;
};
