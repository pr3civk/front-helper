import CardRoute from "@/components/card-route";

const DashboardPage = () => {
  return (
    <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Explore the power of AI
        </h1>
        <h2 className="text-base md:text-[1.1rem] text-muted-foreground">Chat with the smartest AI - Experience the power of AI</h2>
        <div>
          <CardRoute/>
        </div>
    </div>
  );
};

export default DashboardPage;
