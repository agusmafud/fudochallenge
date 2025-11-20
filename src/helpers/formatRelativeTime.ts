const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };

  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (const [unit, secondsInUnit] of Object.entries(ranges)) {
    const absoluteSeconds = Math.abs(secondsElapsed);
    const isLargerThanUnit = secondsInUnit < absoluteSeconds;
    
    if (isLargerThanUnit) {
      const delta = secondsElapsed / secondsInUnit;
      return formatter.format(Math.round(delta), unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return formatter.format(0, 'second');
};

export default formatRelativeTime;
