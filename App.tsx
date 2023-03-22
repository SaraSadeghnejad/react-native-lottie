/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
.time_table_wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  color: #efefef;
  overflow: hidden;
}
.time_table_wrapper:last-child{
  height: 39px;
}
.day {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  background-color: #fff;
}
.day:first-child {
  background: url('../../../assets/images/time-table.svg') top right no-repeat;
  width: 4em;
  margin-left: .2em;

  /* @apply border-solid  border-0 border-l-superThin border-l-daphne */
}
@media (max-width:480px) {
  .day:first-child {
       background:none;
      width: 1.5em;
      margin-left: .1em;
    }
   .time_table_wrapper {
          width: 32em;
     }     
}

.hour {
  @apply hidden
}
.hour:after {
  @apply absolute content-['']  w-[1.5em] xs:border-dashed border-superThin mt-[.5em] border-daphne 
}

 .day_title {
  background-color: #34495e;
  font-size: .7rem;
  font-weight: 600;
  text-transform: uppercase;
  display: none;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 2;
}
 .event {
  position: absolute;
  font-size: .7em;
  font-weight: 300;
  justify-content: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.event_info {
  @apply flex justify-center items-center text-[1.4em] font-yekanBakh font-bold h-[80px] xs:h-[48px] text-tableTitle
}
.puzzlePosition {
  position: absolute;
  bottom: .4em !important;
  left: .6em !important;
}