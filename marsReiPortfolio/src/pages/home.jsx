export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-candlelit-cream text-cocoa p-10 space-y-4">
      <div className="grid grid-cols-3 w-full items-center shrink-0">
        <section className="flex flex-row items-center space-x-2 justify-start">
          <div className="w-8 h-8 rounded-md bg-wine"></div>
          <div className="w-8 h-8 rounded-md bg-dusty-mauve"></div>
          <div className="w-8 h-8 rounded-md bg-cocoa"></div>
          <div className="w-8 h-8 rounded-md bg-sage"></div>
        </section>

        <h1 className="text-wine text-3xl font-medium font-talina tracking-widest text-center">
          mars rei's workspace
        </h1>

        <div></div>

      </div>

      <section className="flex-1 w-full border-2 border-cocoa rounded-3xl">
        
      </section>
    </div>
  );
}