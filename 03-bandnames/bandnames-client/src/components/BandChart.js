import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
 
const BandChart = () => {
  const chartRef = useRef(null);
 
  useEffect(() => {
    const ctx = chartRef.current;
    if (ctx) {
      // Destruir el gráfico existente si existe
      if (ctx.chart) {
        ctx.chart.destroy();
      }
 
      // Crear un nuevo gráfico
      ctx.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
          }]
        },
        options: {
            indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, []);
 
  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default BandChart
