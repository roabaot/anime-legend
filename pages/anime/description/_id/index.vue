<template>
  <div>
    <DescriptionInfo :anime="selectedAnime" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      animes: [
        {
          id: 1,
          img: 'https://i.postimg.cc/1XxJ5d3j/1.jpg',
          name: 'Hunter X Hunter',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2017',
            status: 'متوقف',
            numOfEpisodes: 'غير معروف',
            season: 'الخريف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '19956'
            }
          ]
        },
        {
          id: 2,
          img: 'https://i.postimg.cc/sgVQjtRg/2.jpg',
          name: 'Haikyu!!',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2020',
            status: 'متوقف',
            numOfEpisodes: 'غير معروف',
            season: 'الصيف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '12342'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '23123'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '32423'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 3,
          img: 'https://i.postimg.cc/9Q0nGLcm/3.jpg',
          name: 'Tokyo Ghoul',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2016',
            status: 'منتهس',
            numOfEpisodes: '48',
            season: 'الربيع'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '12314'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '9456'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '14344'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '12767'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '15065'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '20543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '11345'
            }
          ]
        },
        {
          id: 4,
          img: 'https://i.postimg.cc/7PdghXf8/4.webp',
          name: 'Boku no Hero',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2022',
            status: 'يعرض الان',
            numOfEpisodes: 'غير معروف',
            season: 'الخريف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 5,
          img: 'https://i.postimg.cc/BbRjBZKJ/5.jpg',
          name: 'Sword Of the Stranger',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '208',
            status: 'منتهي',
            numOfEpisodes: '1',
            season: 'الشتاء'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            }
          ]
        },
        {
          id: 6,
          img: 'https://i.postimg.cc/KYDVwCNp/6.jpg',
          name: 'Call of the Night',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2021',
            status: 'منتهي',
            numOfEpisodes: '12',
            season: 'الخريف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 7,
          img: 'https://i.postimg.cc/QtrxkDLD/7.jpg',
          name: 'Death Note',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2012',
            status: 'منتهي',
            numOfEpisodes: '12',
            season: 'الصيف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 8,
          img: 'https://i.postimg.cc/V6xCG6dP/8.jpg',
          name: 'Mashle',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2023',
            status: 'قريبا',
            numOfEpisodes: 'غير معروف',
            season: 'الخريف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 9,
          img: 'https://i.postimg.cc/448tnzpy/9.png',
          name: 'Demon Slyer',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2020',
            status: 'متوقف',
            numOfEpisodes: 'غير معروف',
            season: 'الخريف'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            },
            {
              id: 2,
              title: 'الحلقة 2',
              views: '20853'
            },
            {
              id: 3,
              title: 'الحلقة 3',
              views: '22343'
            },
            {
              id: 4,
              title: 'الحلقة 4',
              views: '19343'
            },
            {
              id: 5,
              title: 'الحلقة 5',
              views: '20423'
            },
            {
              id: 6,
              title: 'الحلقة 6',
              views: '27543'
            },
            {
              id: 7,
              title: 'الحلقة 7',
              views: '22345'
            }
          ]
        },
        {
          id: 10,
          img: 'https://i.postimg.cc/y8CNNdpW/10.jpg',
          name: 'Ai Tokyo',
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque perspiciatis fugit ducimus quisquam!',
          info: {
            type: 'TV',
            date: '2020',
            status: 'منتهي',
            numOfEpisodes: '1',
            season: 'الربيع'
          },
          episodes: [
            {
              id: 1,
              title: 'الحلقة 1',
              views: '24333'
            }
          ]
        }
      ]
    }
  },
  computed: {
    selectedAnime () {
      const id = +this.$route.params.id
      const anime = this.animes.find(a => a.id === id)
      return anime
    }
  }
}
</script>

<style>

</style>
