import React, { useEffect } from "react";
import Header from "../Component/Header";
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Get_Demo_Report } from "../Service";
import { searchdata } from "../Helper/Helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Top Users of DCC",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Top Users of DCC",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
function DashboardContent() {
  const [resdata, setresdata] = React.useState([]);

  useEffect(() => {
    setresdata([]);
    Get_Demo_Report()
      .then(({ data }) => {
        setresdata(data.data);
        //  localStorage.setItem("token", data.token);
        //  navigate("/mfasetup");
      })
      .catch((err) => {});
  }, []);
  const databygroup = [];
  const cats = resdata.map((rowdata) => {
    const user_exist = searchdata(databygroup, rowdata["username"]);
    console.log(user_exist.length);
    if (user_exist.length == 0) {
      const newdict = {};
      newdict["username"] = rowdata["username"];
      newdict["data"] = [rowdata];
      databygroup.push(newdict);
    } else {
    }
  }, {});
  // console.log(databygroup);

  return (
    <>
      <Bar options={options} data={data} />;
    </>
  );
}

export default function DemoReport() {
  return <Header DATA={DashboardContent} Title="Demo Report" />;
}
