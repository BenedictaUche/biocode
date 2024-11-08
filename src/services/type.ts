export type BiocodeDataType = {
  company: {
    name: string;
    products: string[];
  };
  dashboard: {
    id: number;
    yearSelection: {
      year: number;
      tabs: {
        name: string;
        data: {
          product?: {
            name: string;
            year: number;
            carbonFootprint: {
              value: number;
              unit: string;
              stages: {
                cradleToGate: {
                  value: number;
                  unit: string;
                  percentage: number;
                };
                gateToGrave: {
                  value: number;
                  unit: string;
                  percentage: number;
                };
                emissions: {
                  value: number;
                  unit: string;
                };
              };
            };
            metadata: {
              type: string;
              status: string;
              category: string;
              createdOn: string;
              lastEdited: string;
            };
            actions: {
              downloadReport: boolean;
              verify: boolean;
              publish: boolean;
            };
          };
          tabsContent?: {
            name: string;
            sections?: {
              name: string;
              percentage: number;
              partialFootprint: {
                value: number;
                unit: string;
              };
              emissions: {
                value: number;
                unit: string;
              };
              mainSources: {
                source: string;
                value: number;
              }[];
              categories: {
                name: string;
                value: number;
                unit: string;
                percentage: number;
                subcategories?: {
                  name: string;
                  value: number;
                  unit: string;
                  percentage: number;
                }[];
              }[];
            }[];
            available?: boolean;
            new?: boolean;
          }[];
        };
      }[];
    };
  }[];
};
