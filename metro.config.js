/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

import MainButton from '@components/ui/MainButton'
import React, { useEffect, useState } from 'react'
import moment from 'jalali-moment'
import { DailyTimeTable } from '@components/TableComponents/daily'
import { useTableContext } from 'src/context/useTableContext'
import examIcon from'@assets/images/exam.svg'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
function DailyContainer() {
  const [currentDate, setCurrentDate] = useState('')
     const {
       dailyScheduleData,
       showDailyDay,
       dailyMutation,
       examStatus,
       examTitle,
     } = useTableContext()

  useEffect(() => {
    const day = {
      day: currentDate,
    }
    dailyMutation.mutate({ body: day })
  }, [ currentDate])
  const handleYesterDay = () => {
    setCurrentDate(
      moment(showDailyDay).locale('fa').subtract(1, 'day').format('YYYY/MM/DD')
    )
  }
  const handleTomorrow = () => {
    setCurrentDate(
      moment(showDailyDay).locale('fa').add(1, 'day').format('YYYY/MM/DD'),
    )

  }
  const dailyData = [
    {
      id: 1,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T06:00:00'),
      endTime: new Date(showDailyDay + 'T06:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 2,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T06:30:00'),
      endTime: new Date(showDailyDay + 'T07:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 3,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T07:00:00'),
      endTime: new Date(showDailyDay + 'T07:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 4,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T07:30:00'),
      endTime: new Date(showDailyDay + 'T08:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 5,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T08:00:00'),
      endTime: new Date(showDailyDay + 'T08:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 6,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T08:30:00'),
      endTime: new Date(showDailyDay + 'T09:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 7,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T09:00:00'),
      endTime: new Date(showDailyDay + 'T09:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 8,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T09:30:00'),
      endTime: new Date(showDailyDay + 'T10:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 9,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T10:00:00'),
      endTime: new Date(showDailyDay + 'T10:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 10,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T10:30:00'),
      endTime: new Date(showDailyDay + 'T11:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 11,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T11:00:00'),
      endTime: new Date(showDailyDay + 'T11:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 12,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T11:30:00'),
      endTime: new Date(showDailyDay + 'T12:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 13,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T12:00:00'),
      endTime: new Date(showDailyDay + 'T12:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 14,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T12:30:00'),
      endTime: new Date(showDailyDay + 'T13:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 15,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T13:00:00'),
      endTime: new Date(showDailyDay + 'T13:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 16,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T13:30:00'),
      endTime: new Date(showDailyDay + 'T14:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 17,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T14:00:00'),
      endTime: new Date(showDailyDay + 'T14:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 18,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T14:30:00'),
      endTime: new Date(showDailyDay + 'T15:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 19,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T15:00:00'),
      endTime: new Date(showDailyDay + 'T15:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 20,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T15:30:00'),
      endTime: new Date(showDailyDay + 'T16:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 21,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T16:00:00'),
      endTime: new Date(showDailyDay + 'T16:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 22,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T16:30:00'),
      endTime: new Date(showDailyDay + 'T17:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 23,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T17:00:00'),
      endTime: new Date(showDailyDay + 'T17:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 24,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T17:30:00'),
      endTime: new Date(showDailyDay + 'T18:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 25,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T18:00:00'),
      endTime: new Date(showDailyDay + 'T18:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 26,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T18:30:00'),
      endTime: new Date(showDailyDay + 'T19:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 27,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T19:00:00'),
      endTime: new Date(showDailyDay + 'T19:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 28,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T19:30:00'),
      endTime: new Date(showDailyDay + 'T20:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 29,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T20:00:00'),
      endTime: new Date(showDailyDay + 'T20:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 30,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T20:30:00'),
      endTime: new Date(showDailyDay + 'T21:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 31,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T21:00:00'),
      endTime: new Date(showDailyDay + 'T21:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 32,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T21:30:00'),
      endTime: new Date(showDailyDay + 'T22:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 33,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T22:00:00'),
      endTime: new Date(showDailyDay + 'T22:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 34,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T22:30:00'),
      endTime: new Date(showDailyDay + 'T23:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 35,
      name: '',
      type: '',
      body_color: 'F1F1F1',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T23:00:00'),
      endTime: new Date(showDailyDay + 'T23:30:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
    {
      id: 36,
      name: '',
      type: '',
      body_color: 'FFFFFF',
      border_color: 'E4E5EF',
      startTime: new Date(showDailyDay + 'T23:30:00'),
      endTime: new Date(showDailyDay + 'T00:00:00'),
      status: '',
      statusColor: '',
      puzzleValue: '',
    },
  ]
  var arr = []
  var len = dailyScheduleData?.items?.schedules.length
  for (var i = 0; i < len; i++) {
    arr.push(dailyScheduleData?.items.schedules[i])
  }
  var dayCells:any = []
  var satleng = dailyScheduleData?.items?.schedules.length
  for (var i = 0; i < satleng; i++) {
    dayCells.push({
      id: arr[i].slug,
      name: arr[i].title,
      type: arr[i].type,
      body_color: arr[i].body_color,
      border_color: arr[i].border_color,
      status: arr[i].status,
      statusColor: arr[i].border_color,
      puzzleValue: arr[i].border_color.puzzle,
      startTime: new Date(arr[i].day.slice(0, 10) + 'T' + arr[i].from),
      endTime: new Date(arr[i].day.slice(0, 10) + 'T' + arr[i].to),
    })
  }
   for (let i = 0; i < dailyData.length - 1; i++) {
     let findIndex = dayCells.findIndex(
      (element:any) =>
         element.startTime.getHours() + ':' + element.startTime.getMinutes() ===
         dailyData[i].startTime.getHours() +
           ':' +
           dailyData[i].startTime.getMinutes(),
     )
     if (findIndex > -1) {
       let secondIndex = dailyData.findIndex(
         element =>
           element.startTime.getHours() +
             ':' +
             element.startTime.getMinutes() ===
           dayCells[findIndex].endTime.getHours() +
             ':' +
             dayCells[findIndex].endTime.getMinutes(),
       )
       {
         dailyData.splice(i, secondIndex - i - 1)
       }
       dailyData[i] = dayCells[findIndex]
     }
   }
 const router= useRouter()
  return (
    <>
      <div className="flex justify-between w-[90%] mr-auto my-5">
        <>
          {dailyMutation.isLoading || !showDailyDay ? (
            <div className={styles['skeleton-header']} />
          ) : (
            <div className="text-steelBlue mt-3 font-bold text-[1.5em]">
              {moment(showDailyDay).locale('fa').format('DD MMM YYYY')}
            </div>
          )}
        </>
        {dailyMutation.isLoading  ? (
          <div className={styles['skeleton-header']} onClick={()=>{router.push('/exam')}} />
        ) : (
          <div
            className={
              examStatus !== null && examTitle !== undefined
                ? `bg-deActiveBlue border-solid  border-superThin border-steelBlue rounded-[.4em] w-[7em] sm:w-[15em] flex flex-row justify-center mt-3 h-[2em] sm:h-[3em] items-center`
                : 'hidden'
            }
          >
            <Image src={examIcon} alt="exam" title="exam" />
            <div className="text-[.7em] sm:text-[1.2em] font-bold mr-5">
              {examTitle}
            </div>
          </div>
        )}

        <div className="flex mt-3 sm:ml-[1.5em]">
          <MainButton
            icon="chevron-right"
            variant="icon"
            className="text-firewatch sm:text-[1.5em]"
            onClick={() => {
              handleYesterDay()
            }}
          />
          <MainButton
            variant="icon"
            icon="chevron-left"
            className="text-firewatch sm:text-[1.5em]"
            onClick={() => {
              handleTomorrow()
            }}
          />
        </div>
      </div>
      <DailyTimeTable
        events={{
          day: dailyData,
        }}
        style={{ height: '2000px' }}
      />
    </>
  )
}

export default DailyContainer
