import { Text, Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react"

type StatsLengthProps = {
  length: string
}

export const StatLength = ({length}: StatsLengthProps) => {
  return (
    <Stat>
      <StatLabel>COUNT</StatLabel>
      <StatNumber>
        <Flex>
          {length}
          <Text ml={".5rem"} fontSize={"1.2rem"} mt={"auto"}>words</Text>
        </Flex>
      </StatNumber>
    </Stat>
  )
}
