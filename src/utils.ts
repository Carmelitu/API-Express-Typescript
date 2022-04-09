import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromReq
}

const parseDate = (dateFormReq: any): string => {
  if (!isDate(dateFormReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFormReq
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missing Weather')
  }
  return weatherFromReq
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromReq
}

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
