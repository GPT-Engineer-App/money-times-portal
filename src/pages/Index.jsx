import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaBuilding, FaDollarSign, FaCommentDots } from "react-icons/fa";

const articles = [
  {
    title: "Global Markets Rally Amid Economic Optimism",
    summary: "Stocks surged worldwide as investors grew optimistic about economic recovery.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Tech Companies Lead the Charge in Q3 Earnings",
    summary: "Major tech firms reported strong earnings, driving market gains.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Central Banks Signal Continued Support",
    summary: "Central banks around the world pledged to maintain supportive monetary policies.",
    image: "https://via.placeholder.com/150",
  },
];

const marketData = [
  { name: "S&P 500", value: "4,500.50", change: "+1.25%" },
  { name: "Dow Jones", value: "35,000.75", change: "+0.85%" },
  { name: "Nasdaq", value: "14,000.25", change: "+1.75%" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={8}>
          <Link href="#" display="flex" alignItems="center">
            <FaHome />
            <Text ml={2}>Home</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Markets</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaBuilding />
            <Text ml={2}>Companies</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaDollarSign />
            <Text ml={2}>Economy</Text>
          </Link>
          <Link href="#" display="flex" alignItems="center">
            <FaCommentDots />
            <Text ml={2}>Opinion</Text>
          </Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        {/* Latest News Articles */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading size="md" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {articles.map((article, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={4}>
                  <Heading size="sm" mb={2}>{article.title}</Heading>
                  <Text>{article.summary}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Market Data Sidebar */}
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Market Data</Heading>
          <VStack spacing={4} align="stretch">
            {marketData.map((data, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <Text fontWeight="bold">{data.name}</Text>
                <Text>{data.value}</Text>
                <Text color={data.change.startsWith("+") ? "green.500" : "red.500"}>{data.change}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;