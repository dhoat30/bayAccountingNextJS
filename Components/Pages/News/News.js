import React from 'react'
import HeroImage from '../../UI/Hero/HeroImage'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import NewsCard from '../../UI/Cards/NewsCard'
import BackGround from '../../UI/BackGround/BackGround'
function News({ newsData, heroImageData }) {
    console.log(newsData)
    const newsCards = newsData.map(item => {
        console.log(item)
        return (
            <NewsCard key={item.id}
                title={item.title.rendered}
                image={item._embedded['wp:featuredmedia']['0'].source_url}
                excerpt={item.excerpt.rendered}
                slug={`/news/${item.slug}`}
                date={item.acf.date}
            />

        )
    })
    return (
        <Container>
            <HeroImage images={heroImageData} smallHeight={true} />
            <Main>
                <BackGround>
                    <SectionTitle subtitle="Important Articles" align="center">Latest News</SectionTitle>
                    <NewsContainer>
                        {newsCards}
                        {newsCards}
                        {newsCards}

                    </NewsContainer>
                </BackGround>
            </Main>
        </Container>
    )
}

export default News
const Container = styled.div`
    background: var(--offWhite);

`
const Main = styled.section`
    margin: 0 auto;
    max-width: 1500px;
    padding: 50px 20px;
@media (max-width: 400px ){ 
        padding: 40px 10px;
    }
`
const NewsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`