import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Image,
} from "@chakra-ui/react";
import "./Cards.css";

const Cards = ({
  images,
  price,
  brand,
  rating,
  inStock,
  prodDetails,
  title,
}) => {
  return (
    <Card
      maxW="md"
      style={{
        width: "350px",
        height: "350px",
        borderRadius: "0.8rem",
        boxShadow:"2px 2px 2px black",
        

      }}
      className="Crads-view"
    >
      <Image
        objectFit="cover"
        src={images}
        alt={brand}
        style={{ height: "180px", borderRadius: "0.8rem", }}
      />
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">
                {brand} <p>{title}</p>
              </Heading>
              <span>Ratings:</span>
              <Text color="blue.600" fontSize="sm">
                {rating}
              </Text>
              <span>In Stock:</span>
              <Text color="blue.600" fontSize="sm">
                {inStock}
              </Text>
              <span>Price:</span>
              <Text color="blue.600" fontSize="sm">
                {price}
              </Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{prodDetails}.</Text>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost">
          Like
        </Button>
        <Button flex="1" variant="ghost">
          Comment
        </Button>
        <Button flex="1" variant="ghost">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
