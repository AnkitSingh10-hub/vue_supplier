


export interface ActivityResponse{
    next:         string;
    previous:     null;
    currentPage:  number;
    pageSize:     number;
    totalPages:   number;
    totalObjects: number;
    results:      Results;
}

export interface Results {
    images: string[];
    data:   Datum[];
}

export interface Datum {
    id:                      number;
    averageRating:           number;
    totalReviews:            number;
    startingPrice:           number;
    discountedStartingPrice: number;
    name:                    string;
    detail:                  string;
    district:                string;
    serviceName:             string[];
    sServiceName:            string;
    thumbnail:               string;
    schedule:                string;
}
