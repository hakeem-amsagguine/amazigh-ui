// apps/playground/src/App.tsx
import React from "react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@amazigh-ui/components";
import { useTheme } from "@amazigh-ui/themes";

const App: React.FC = () => {
  const { themeType, setThemeType } = useTheme();

  const toggleTheme = () => {
    setThemeType(themeType === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">amazigh UI Playground</h1>
          <div className="flex items-center gap-4">
            <Button onClick={toggleTheme} variant="outline">
              Toggle Theme ({themeType})
            </Button>
            <Button
              onClick={() => setThemeType("system")}
              variant="ghost"
              disabled={themeType === "system"}
            >
              Use System Theme
            </Button>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="subtle">Subtle</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>

          <div className="mt-6">
            <Button fullWidth>Full Width Button</Button>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>With multiple actions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards can contain any content, including forms, lists, or media.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Submit</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A simple card with just a title and content.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
