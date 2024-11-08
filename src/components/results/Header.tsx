import { useState } from "react";
import { fetchDashboardData } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Star, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Details from "../Details";
import { BiocodeDataType } from "@/services/type";

const Header = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const { isLoading, data } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="w-full p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Acme Pasta</h1>
        <Button className="flex items-center space-x-1">
          <Star className="mr-1" size={18} />
          <Plus size={18} />
          New
        </Button>
      </div>

      {/* Year Tabs */}
      <Tabs defaultValue={data.dashboard[0]?.yearSelection.year} onValueChange={setSelectedYear} className="w-full">
        <TabsList className="flex gap-2">
          {data.dashboard.map((yearData: any) => (
            <TabsTrigger key={yearData.id} value={yearData.yearSelection.year}
            className="text-gray-500 hover:text-black hover:font-bold data-[state=active]:text-black data-[state=active]:font-bold"
            >
              {yearData.yearSelection.year}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Scenario Tabs for Selected Year */}
        {data.dashboard.map((yearData: any) => (
          <TabsContent key={yearData.id} value={yearData.yearSelection.year}>
            <div className="mt-4">
              <Tabs defaultValue={yearData.yearSelection.tabs[0].name} className="w-full">
                <TabsList className="flex gap-2">
                  {yearData.yearSelection.tabs.map((tab: any, index: any) => (
                    <TabsTrigger key={index} value={tab.name}
                    className="text-gray-500 hover:text-black hover:font-bold data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:border-b-4 data-[state=active]:border-blue-500"
                    >
                      {tab.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Content for each scenario tab */}
                {yearData.yearSelection.tabs.map((tab: any) => (
                  <TabsContent key={tab.name} value={tab.name}>
                    <div className="">
                      <Details data={tab}/>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </nav>
  );
};

export default Header;
