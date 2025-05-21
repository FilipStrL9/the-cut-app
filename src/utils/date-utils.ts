
import { format, parse, addDays, isWeekend, isBefore, startOfDay } from 'date-fns';

// Format a date object to string
export const formatDate = (date: Date, formatString: string = 'yyyy-MM-dd'): string => {
  return format(date, formatString);
};

// Parse a date string to a Date object
export const parseDate = (dateString: string, formatString: string = 'yyyy-MM-dd'): Date => {
  return parse(dateString, formatString, new Date());
};

// Get today's date
export const getToday = (): Date => {
  return startOfDay(new Date());
};

// Get dates for the next n days (excluding weekends if specified)
export const getAvailableDates = (days: number = 14, excludeWeekends: boolean = false): Date[] => {
  const dates: Date[] = [];
  let currentDate = getToday();
  
  while (dates.length < days) {
    if (!excludeWeekends || !isWeekend(currentDate)) {
      dates.push(currentDate);
    }
    currentDate = addDays(currentDate, 1);
  }
  
  return dates;
};

// Check if a date is in the past
export const isPastDate = (date: Date): boolean => {
  return isBefore(date, getToday());
};

// Format a date for display to users
export const formatDisplayDate = (date: Date): string => {
  return format(date, 'EEEE, MMMM d, yyyy');
};
