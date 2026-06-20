Chart.defaults.color = '#6e6e73';
Chart.defaults.borderColor = '#dedee2';
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif";

const common = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { usePointStyle: true, padding: 18, font: { size: 12 } }
    },
    tooltip: { padding: 12 }
  }
};

new Chart(document.getElementById('radar'), {
  type: 'radar',
  data: {
    labels: [
      'Travel context',
      'Physical objects',
      '3D digitization',
      'Collection',
      'Storytelling',
      'Curation',
      'Public sharing',
      'Low friction'
    ],
    datasets: [
      { label: 'Travel Museum (target)', data: [85,100,90,75,85,80,90,55], borderColor: '#3f7c78', backgroundColor: 'rgba(63,124,120,.08)', borderWidth: 2, pointRadius: 2 },
      { label: 'Polarsteps', data: [100,10,5,45,90,35,85,90], borderColor: '#4477a8', backgroundColor: 'rgba(68,119,168,.04)', borderWidth: 2, pointRadius: 2 },
      { label: 'FindPenguins', data: [95,10,15,50,85,30,85,85], borderColor: '#9b7a36', backgroundColor: 'rgba(155,122,54,.04)', borderWidth: 2, pointRadius: 2 },
      { label: 'Polycam', data: [10,95,100,55,15,10,75,55], borderColor: '#b96545', backgroundColor: 'rgba(185,101,69,.04)', borderWidth: 2, pointRadius: 2 },
      { label: 'Milanote', data: [15,35,5,70,65,100,90,75], borderColor: '#8b8b91', backgroundColor: 'rgba(139,139,145,.03)', borderWidth: 2, pointRadius: 2 }
    ]
  },
  options: {
    ...common,
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 25, backdropColor: 'transparent' },
        grid: { color: '#dedee2' },
        angleLines: { color: '#dedee2' },
        pointLabels: { color: '#1d1d1f', font: { size: 12 } }
      }
    }
  }
});

new Chart(document.getElementById('positioning'), {
  type: 'bubble',
  data: {
    datasets: [
      { label: 'Travel Museum', data: [{x:92,y:95,r:16}], backgroundColor: 'rgba(63,124,120,.58)', borderColor: '#3f7c78', borderWidth: 1.5 },
      { label: 'Polarsteps', data: [{x:96,y:10,r:14}], backgroundColor: 'rgba(68,119,168,.50)', borderColor: '#4477a8', borderWidth: 1.5 },
      { label: 'FindPenguins', data: [{x:90,y:18,r:14}], backgroundColor: 'rgba(155,122,54,.50)', borderColor: '#9b7a36', borderWidth: 1.5 },
      { label: 'Polycam', data: [{x:15,y:98,r:13}], backgroundColor: 'rgba(185,101,69,.50)', borderColor: '#b96545', borderWidth: 1.5 },
      { label: 'Milanote', data: [{x:35,y:22,r:15}], backgroundColor: 'rgba(139,139,145,.48)', borderColor: '#8b8b91', borderWidth: 1.5 }
    ]
  },
  options: {
    ...common,
    scales: {
      x: {
        min: 0,
        max: 105,
        title: { display: true, text: 'Travel and emotional context →', color: '#1d1d1f', font: { weight: '600' } },
        ticks: { stepSize: 20 }
      },
      y: {
        min: 0,
        max: 105,
        title: { display: true, text: 'Physical objects and 3D immersion →', color: '#1d1d1f', font: { weight: '600' } },
        ticks: { stepSize: 20 }
      }
    }
  }
});

new Chart(document.getElementById('porter'), {
  type: 'radar',
  data: {
    labels: ['New entrants', 'Supplier power', 'Buyer power', 'Substitutes', 'Rivalry'],
    datasets: [{
      label: 'Threat intensity (1–5)',
      data: [3,4,4,5,3],
      borderColor: '#b96545',
      backgroundColor: 'rgba(185,101,69,.08)',
      borderWidth: 2,
      pointRadius: 3
    }]
  },
  options: {
    ...common,
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: { stepSize: 1, backdropColor: 'transparent' },
        grid: { color: '#dedee2' },
        angleLines: { color: '#dedee2' },
        pointLabels: { color: '#1d1d1f', font: { size: 12 } }
      }
    }
  }
});
