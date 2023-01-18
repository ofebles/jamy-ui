import { useState } from "react";
import { Block, Card, ColGrid, Tab, TabList, Text, Title } from "@tremor/react";
import SalesPerson from "@/components/dashboard/SalesPerson/SalesPerson";
import ChartView from "@/components/dashboard/ChartView/ChartView";
import KpiCardGrid from "@/components/dashboard/KpiCardGrid/KpiCardGrid";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState(1);
  return (
    <main className="bg-slate-50 p-6 sm:p-10 max-h-100">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue={1}
        handleSelect={(value) => setSelectedView(value)}
        marginTop="mt-6"
      >
        <Tab value={1} text="Overview" />
        <Tab value={2} text="Detail" />
      </TabList>
      {selectedView === 1 ? (
        <>
          <KpiCardGrid></KpiCardGrid>
          <Block marginTop="mt-6">
            <ChartView></ChartView>
          </Block>
        </>
      ) : (
        <Block marginTop="mt-6">
          <SalesPerson></SalesPerson>
        </Block>
      )}
    </main>
  );
}
