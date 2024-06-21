import React from "react";
const TimeTable = ({ data }) => {
  console.log(data);

  //   const days = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  //   const classPeriods = Array.from({ length: 10 }, (_, i) => i + 1);

//   const newData = data;
//   data[0].map((item) => {
//     console.log(item);
//   });
  //   const yearData = data[0];
  //   console.log(yearData);
  //   const subjects = yearData["Tin học ứng dụng"]["Học kỳ 1"];

  //   const renderPeriod = (day, period) => {
  //     const dayData = subjects[day];
  //     if (!dayData) {
  //       return null;
  //     }

  //     const sessions = ["Sáng", "Chiều"];
  //     for (let session of sessions) {
  //       const classes = dayData[session];
  //       if (!classes) {
  //         continue;
  //       }

  //       for (let cls of classes) {
  //         if (cls.classPeriod.split(", ").includes(period.toString())) {
  //           return (
  //             <div>
  //               <div>{cls.subject}</div>
  //             </div>
  //           );
  //         }
  //       }
  //     }
  //     return null;
  //   };

  return (
    <table className="timetable-table">
      {/* <thead>
        <tr>
          <th align="center" width="10%"></th>
          {days.map((day, index) => (
            <th key={index} align="center" width="10%">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {classPeriods.map((period, index) => (
          <tr key={index}>
            <td align="center" width="10%">
              {period}
            </td>
            {days.map((day, dayIndex) => (
              <td key={dayIndex} align="center" width="10%">
                {renderPeriod(day, period)}
              </td>
            ))}
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};

export default TimeTable;
