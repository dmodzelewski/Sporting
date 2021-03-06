import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Faq from 'react-faq-component'

const data = {
  title: 'FAQ (Jak działa nasza strona)',
  rows: [
    {
      title: 'Jak wyszukiwać obiekty',
      content: `Aby wyszukać obiekt należy wprowadzić szukaną miejscowość, określić datę spotkania, a także wybrac ilość osób które będa uczestniczyły`,
    },
    {
      title: 'Nie mogę się zalogować',
      content:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: 'What is the package version',
      content: <p>current version is 1.2.1</p>,
    },
  ],
}

const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'blue',
  // rowContentColor: 'grey',
  // arrowColor: "red",
}

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
}

const About = () => {
  return (
    <Container style={{ paddingBottom: '230px' }}>
      <Row>
        <Faq data={data} styles={styles} config={config} />
      </Row>
    </Container>
  )
}
export default About
