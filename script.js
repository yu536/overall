// Данные с текстом и изображениями
const data = {
    "IELTS_Writing_Task_1": {
      "Graph1": {
        "Band9_Overall": [
          {
            "text": "Overall, it is clear that the most noticeable trend is a significant difference between the highest and lowest figures, with a general upward movement over the period.",
            "image": "https://www.chartgo.com/images/carousel/3/3.png"
          }
        ]
      },
      "Graph2": {
        "Band9_Overall": [
          {
            "text": "Overall, it is evident that all categories experienced a downward trend throughout the period.",
            "image": "https://images.ctfassets.net/w6r2i5d8q73s/6jIKWoJjrCj9ptPR4GoXR1/4cd26ccfca6ff3d707d4899f3ddc0168/graphs_hero_image_EN_standard_4_3.png?fm=webp&q=75"
          }
        ]
      },
      "Graph3": {
        "Band9_Overall": [
          {
            "text": "Overall, while some categories showed a marked increase, others declined considerably over the given timespan",
            "image": "https://cdn1.byjus.com/wp-content/uploads/2021/03/line-graph.png"
          }
        ]
      },
      "Table": {
        "Band9_Overall": [
          {
            "text": "Overall, it is evident that the countries with stronger economic conditions generally recorded higher values across most indicators.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDw_n3I1OAY17IKujM5FAOceio8EplVxC8Q&s"
          },
          {
            "text": "Overall, the wealthier nations tended to perform significantly better in terms of income, life expectancy, and literacy.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0fh5ukSgTI5jegAVRSNWVh8bJYg6Jm3fqQ&s"
          }
        ]
      },
      "Map": {
        "Band9_Overall_BeforeAfter": [
          {
            "text": "Overall, the area has undergone significant development, with more infrastructure, improved accessibility, and a clear shift from an open rural layout to a more urbanised environment.",
            "image": "https://www.ieltsbuddy.com/images/ielts-map-past-present.jpg"
          },
          {
            "text": "Overall, the town experienced major expansion, particularly in residential and commercial zones.",
            "image": "https://cdn.aehelp.com/wp-content/uploads/2022/03/AE-1080x1080-2-jpg.webp"
          }
        ],
        "Band9_Overall_SingleMap": [
          {
            "text": "Overall, the town layout is organised into clearly defined zones, with residential, commercial, and recreational areas positioned logically around the central point.",
            "image": "https://galvanizetestprep.com/wp-content/uploads/2022/05/IELTS-Maps-sample-2.png"
          }
        ]
      },
      "Process": {
        "Band9_Overall": [
          {
            "text": "Overall, the process consists of several sequential stages, beginning with raw material preparation and ending with the final product.",
            "image": "https://www.ieltsbuddy.com/images/ielts-process-bricks.jpg"
          },
          {
            "text": "Overall, the procedure is entirely linear or cyclical, with each stage depending on the completion of the previous one.",
            "image": "https://ted-ielts.com/wp-content/uploads/2019/04/cement-and-concrete_guj8lc.jpg"
          }
        ]
      }
    }
  };
  
  // Получаем контейнер для карточек
  const container = document.getElementById('cardsContainer');
  
  // Проходим по каждому типу задания
  for (const taskType in data.IELTS_Writing_Task_1) {
    const task = data.IELTS_Writing_Task_1[taskType];
  
    let overalls = [];
  
    // Собираем все тексты и изображения
    for (const key in task) {
      if (Array.isArray(task[key])) {
        overalls = overalls.concat(task[key]);
      }
    }
  
    // Создаём карточку для каждого текста
    overalls.forEach((item, index) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Плавная последовательная анимация
      card.style.animationDelay = `${index * 0.2}s`;
  
      card.innerHTML = `
        <img src="${item.image}" alt="${taskType}" class="card-img">
        <h2>${taskType} ${index + 1}</h2>
        <p class="overall">${item.text}</p>
      `;
  
      container.appendChild(card);
    });
  }
  