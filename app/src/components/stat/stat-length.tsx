import { Text, Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react"

type StatsLengthProps = {
  length: number
}

export const StatLength = ({ length }: StatsLengthProps) => {
  return (
    <Stat>
      <StatLabel>COUNT</StatLabel>
      <StatNumber>
        <Flex>
          {length}
          <Text fontSize={"1.2rem"} ml={".5rem"} mt={"auto"}>
            words
          </Text>
        </Flex>
      </StatNumber>
    </Stat>
  )
}
