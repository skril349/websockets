import React, { useContext, useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { SocketContext } from '../context/SocketContext';

const BandChart = () => {
    const chartRef = useRef(null);
    const { socket } = useContext(SocketContext)
    const [bands, setBands] = useState([]);


    useEffect(() => {
        socket.on('current-bands', (bands) => {
           
            console.log("bands =", bands)
            crearGrafica(bands)
        })
        return () => socket.off('current-bands')
    }, [socket])

    const crearGrafica = (bands = [], votes = [])=>{
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
                    labels: bands.map((band)=> band.name),
                    datasets: [{
                        label: '# of Votes',
                        data:bands.map((band)=> band.votes),
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
    }

    return (
        <canvas ref={chartRef}></canvas>
    );
};

export default BandChart
