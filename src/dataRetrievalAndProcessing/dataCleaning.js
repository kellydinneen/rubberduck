export const cleanData = (data, source) => {
  if (source === 'unstuck') {
    return approveSolutionContent(data);
  } else if (source === 'affirmations') {
    return approveAffirmationContent(data);
  } else if (source === 'advice') {

  }
}

const approveSolutionContent = (solutionData) => {
  if (solutionData.name && solutionData.content) {
    return {
      title: solutionData.name,
      content: solutionData.content,
      resource: solutionData.resource
    }
  } else {
    return "bad data";
  }
}

const approveAffirmationContent = (affData) => {
  if (affData.affirmation) {
    return {
      title: 'a little love',
      content: affData.affirmation,
      resource: 'https://www.psychologytoday.com/us/blog/sense-and-sensitivity/201401/3-ways-learn-love-yourself'
    }
  } else {
    return "bad data";
  }
}

const approveAdviceContent = (advData) => {
  if (advData.slip.advice) {
    return {
      title: 'some general advice',
      content: advData.slip.advice,
      resource: 'https://www.nytimes.com/2019/04/30/smarter-living/best-advice-youve-ever-received.html'
    }
  } else {
    return "bad data";
  }
}
