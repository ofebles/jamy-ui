import SimpleCard from "@/components/shopping/Card/Card";
import GreatCard from "@/components/shopping/Card/GreatCard";
import { Grid, GridItem, SimpleGrid, Box } from "@chakra-ui/react";

export default function Layout() {
  return (
    <SimpleGrid columns={3} spacing={2}>
      <SimpleCard></SimpleCard>
      <GreatCard></GreatCard>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
  );
}
