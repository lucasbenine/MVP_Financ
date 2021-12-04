import Chart from 'react-apexcharts';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import token from '../../token';


const DonutChart = ({rota}) => {


    const [chartData, setChartData] = useState({ labels: [], series: []});

    useEffect( () => {

        async function despesaByCategoria() {

            // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmZXJuYW5kbyIsImV4cCI6MTYzNzQxNjE3Mn0.b0wQ6buxzyu35IM6du-wjp1VLQfIgBSpD2h1dalKi03I_R2i2ykUPPjIOuTB9ZmRy5tJsukagN7ApZZBDesasQ';

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            
            await api.get(rota + '/amount-by-categoria', config)
                .then(response => {
                const data = response.data
                const myLabels = data.map(x => x.categoriaNome);
                const mySeries = data.map(x => x.soma);
                console.log(rota)
                setChartData({ labels: myLabels, series: mySeries})
            });
        
        }

        despesaByCategoria();

    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (

        <Chart
        options={{ ...options, labels: chartData.labels}}
        series={chartData.series}
        type="donut"
        height="200"
    />

    );
}

export default DonutChart;