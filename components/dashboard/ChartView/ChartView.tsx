import { useState } from "react";
import {
  AreaChart,
  Block,
  Card,
  Flex,
  Icon,
  Text,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";

export const performance = [
  {
    date: "2021-01-01",
    Sales: 92300.73,
    Profit: 34343,
    Customers: 273,
  },
  {
    date: "2021-01-01",
    Sales: 22.73,
    Profit: 173,
    Customers: 273,
  },
  {
    date: "2021-01-01",
    Sales: 90110.73,
    Profit: 324473,
    Customers: 573,
  },
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 873,
    Customers: 173,
  },
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 273,
    Customers: 13,
  },
  {
    date: "2021-01-01",
    Sales: 900.73,
    Profit: 173,
    Customers: 73,
  },

  {
    date: "2021-01-02",
    Sales: 101100.74,
    Profit: 174.6,
    Customers: 74,
  },
  // ...
  {
    date: "2021-03-13",
    Sales: 11,
    Profit: 682,
    Customers: 682,
  },
];

// Basic formatters for the chart values
const dollarFormatter = (value: number) =>
  `$ ${Intl.NumberFormat("us").format(value).toString()}`;

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartView() {
  const [selectedKpi, setSelectedKpi] = useState("Sales");

  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    Sales: dollarFormatter,
    Profit: dollarFormatter,
    Customers: numberFormatter,
  };

  return (
    <Card>
      <div className="md:flex justify-between">
        <Block>
          <Flex
            justifyContent="justify-start"
            spaceX="space-x-0.5"
            alignItems="items-center"
          >
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows day-over-day (%) changes of past performance"
            />
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </Block>
        <div className="mt-6 md:mt-0">
          <Toggle
            color="zinc"
            defaultValue={selectedKpi}
            handleSelect={(value) => setSelectedKpi(value)}
          >
            <ToggleItem value="Sales" text="Sales" />
            <ToggleItem value="Profit" text="Profit" />
            <ToggleItem value="Customers" text="Customers" />
          </Toggle>
        </div>
      </div>
      <AreaChart
        data={performance}
        dataKey="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth="w-14"
        height="h-96"
        marginTop="mt-8"
      />
    </Card>
  );
}
