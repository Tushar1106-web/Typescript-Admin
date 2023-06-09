import CanvasJSReact  from "@canvasjs/react-charts";


var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Dashboard = () => {
  console.log("dashboard");
  const options = {
    title: {
      text: "Basic pie Chart in React",
    },
    data: [
      {
        type: "pie",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  const next = {
    title: {
      text: "Basic Column Chart in React",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  const pie = {
    title: {
      text: "Basic doughnut Chart in React",
    },
    data: [
      {
        type: "doughnut",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  const sc = {
    title: {
      text: "Basic Line Chart in React",
    },
    data: [
      {
        type: "line",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 },
        ],
      },
    ],
  };

  return (
     
        <div className="container px-5 py-24 mx-auto">
           
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <CanvasJSChart options={options} />
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <CanvasJSChart className="ms-10" options={next} />
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <CanvasJSChart className="ms-10" options={sc} />
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <CanvasJSChart className="ms-10" options={pie} />
              </div>
            </div>
          </div>
          
       
    </div>
  );
};

export default Dashboard;
