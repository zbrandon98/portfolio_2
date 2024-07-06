import classes from './HomePage.module.css';
import { Text } from '@mantine/core';
const HomePage = () => {
  return (
    <>
        <div id='home' className={classes.section}>
            <div className={classes.center}>
              <Text
                className={classes.main}
                variant='gradient'
                gradient={{ from: 'rgba(230, 230, 230, 1)', to: 'rgba(171, 171, 171, 1)', deg: 180 }}
                fw={200}
              >
                Brandon Zarate.
              </Text>
              <div className={classes.subtitle}>
                <Text className={classes.subtitle} fw={200}>
                  Designer.  
                </Text>
                <Text className={classes.subtitle} fw={100}>
                  <span className={classes.codelt}>&lt;</span >
                  <span className={classes.codename}>Developer</span>
                  <span className={classes.code}>/&gt;</span>
                </Text>
              </div>
            </div>
        </div>
        
    </>
  )
}

export default HomePage