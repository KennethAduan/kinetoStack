import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Box,
  Badge,
  Card,
  SimpleGrid,
  Center,
} from "@mantine/core";
import ThemeSwitcher from "../components/ThemeSwitcher";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box>
      {/* Header */}
      <Box
        p="md"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "var(--mantine-color-body)",
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Group justify="space-between">
          <Title order={3}>KinetoStack</Title>
          <ThemeSwitcher />
        </Group>
      </Box>

      {/* Hero Section */}
      <Container size="lg" py={150}>
        <Stack gap="xl" align="center" ta="center">
          <Badge
            size="lg"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Modern Stack
          </Badge>
          <Title order={1} size={60} fw={900} lh={1.1}>
            Build Fast with
            <Box component="span" c="blue">
              {" "}
              KinetoStack
            </Box>
          </Title>
          <Text size="xl" c="dimmed" maw={600}>
            The ultimate development template combining Vite, Bun, Mantine, and
            TanStack Router for blazing-fast, modern web applications.
          </Text>
          <Group gap="md" justify="center">
            <Button
              size="lg"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box py={80}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            Why Choose This Stack?
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section p="md">
                <Title order={3}>⚡ Lightning Fast</Title>
              </Card.Section>
              <Text size="sm" c="dimmed" mt="md">
                Powered by Vite and Bun for instant builds and lightning-quick
                development experience.
              </Text>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section p="md">
                <Title order={3}>🎨 Beautiful UI</Title>
              </Card.Section>
              <Text size="sm" c="dimmed" mt="md">
                Mantine components provide a modern, accessible, and
                customizable design system.
              </Text>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section p="md">
                <Title order={3}>🧭 Smart Routing</Title>
              </Card.Section>
              <Text size="sm" c="dimmed" mt="md">
                TanStack Router offers type-safe routing with excellent
                developer experience.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container size="lg" py={80}>
        <Center>
          <Stack gap="xl" align="center" maw={600} ta="center">
            <Title order={2}>Ready to Build Something Amazing?</Title>
            <Text size="lg" c="dimmed">
              Start building your next project with this powerful stack today.
            </Text>
            <Button
              size="xl"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Start Building Now
            </Button>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}
