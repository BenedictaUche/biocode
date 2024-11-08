import React from "react";
import { BiocodeDataType } from "@/services/type";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chartData = [
  { month: "january", cradleToGate: 1260, gateToGrave: 570, emissions: 1745 },
];

const chartConfig = {
  cradleToGate: {
    label: "Cradle to gate",
    color: "#fab7a0",
  },
  gateToGrave: {
    label: "Gate to grave",
    color: "#a399ff",
  },
  emissions: {
    label: "Emissions",
    color: "#fdca18",
  },
} satisfies ChartConfig;

const Details = ({ data }: any) => {
  const metadata = data.data.product.carbonFootprint.stages.map(
    (item: any) => item
  );
  console.log(metadata);

  const carbonFootPrint = data.data.product.carbonFootprint.value;

  return (
    <div>
      <div className="bg-[#001242] p-6 rounded-lg shadow-md text-white">
        <div className="flex items-center w-full gap-4">
          {/* Header Section */}
          <div className="w-3/4 border-r-2 border-r-gray-700 pr-4">
            <div className="flex justify-between items-center mb-6 border-b-2 border-b-gray-700 pb-3">
              <h2 className="text-2xl font-medium">
                <span className="text-white">{data.data.product.name}</span>{" "}
                <span className="text-gray-400">{data.data.product.year}</span>
              </h2>
            </div>

            {/* Carbon Footprint Section */}
            <div className="flex gap-8">
              {/* Left Column */}
              <div className="flex-1">
                <div className=" mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-semibold text-white">
                      CARBON FOOTPRINT{" "}
                      <span className="text-slate-400">(SHARE)</span>
                    </h3>
                  </div>
                  <Progress value={88} />
                </div>
                <div className="flex">
                  {data.data.product.carbonFootprint.stages.map((item: any) => (
                    <div className="flex flex-col my-2 p-2">
                      <h2 className="text-xs uppercase font-semibold text-slate-400 pb-2">
                        {item.name}
                      </h2>
                      <div className="flex space-x-2">
                        <p className="text-white text-4xl">{item.value}</p>
                        <p className="text-gray-400 text-xs w-12 lowercase">
                          {item.unit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square w-full max-w-[250px]"
                >
                  <RadialBarChart
                    data={chartData}
                    endAngle={180}
                    innerRadius={80}
                    outerRadius={130}
                  >
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <PolarRadiusAxis
                      tick={false}
                      tickLine={false}
                      axisLine={false}
                    >
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text
                                x={viewBox.cx}
                                y={viewBox.cy}
                                textAnchor="middle"
                              >
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) - 16}
                                  className="fill-foreground text-white text-5xl font-bold"
                                >
                                  {carbonFootPrint.toLocaleString()}
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 4}
                                  className="fill-muted-foreground text-white"
                                >
                                  {data.data.product.carbonFootprint.unit}
                                </tspan>
                              </text>
                            );
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                    <RadialBar
                      dataKey="cradleToGate"
                      stackId="a"
                      cornerRadius={5}
                      fill="#fab7a0"
                      className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                      dataKey="gateToGrave"
                      fill="#a399ff"
                      stackId="a"
                      cornerRadius={5}
                      className="stroke-transparent stroke-2"
                    />
                    <RadialBar
                      dataKey="emissions"
                      fill="#fdca18"
                      stackId="a"
                      cornerRadius={5}
                      className="stroke-transparent stroke-2"
                    />
                  </RadialBarChart>
                </ChartContainer>
              </div>
              {/* <div className="flex flex-col items-center bg-blue-900 p-6 rounded-lg text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-4xl font-bold">1.94</h4>
                  <p className="text-sm">KG CO₂e / KG</p>
                </div>
                <svg className="w-32 h-32" viewBox="0 0 36 36">
                  <path
                    className="text-gray-400"
                    d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    className="text-green-500"
                    d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 13.524 7.905
                  a 15.9155 15.9155 0 0 1 -3.596 14.88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <p className="mt-4 text-sm">Cradle to Grave</p>
            </div> */}
            </div>

            {/* metadata */}
            <div className="flex items-center gap-4">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">
                Download report
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Verify
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Publish
              </button>
            </div>
          </div>
          {/* Metadata Section */}
          <div className="flex flex-col text-sm space-y-2 w-3/12">
            <p>
              Type:{" "}
              <span className="font-semibold">
                {data.data.product.metadata.type}
              </span>
            </p>
            <p>
              Status:{" "}
              <span className="font-semibold">
                {data.data.product.metadata.status}
              </span>
            </p>
            <p>
              Category:{" "}
              <span className="font-semibold">
                {data.data.product.metadata.category}
              </span>
            </p>
            <p>
              Year:{" "}
              <span className="font-semibold">{data.data.product.year}</span>
            </p>
            <p>
              Created on:{" "}
              <span className="font-semibold">
                {data.data.product.metadata.createdOn}
              </span>
            </p>
            <p>
              Last edited:{" "}
              <span className="font-semibold">
                {data.data.product.metadata.lastEdited}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>


    </div>
  );
};

export default Details;
