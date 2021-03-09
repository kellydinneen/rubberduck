const fetchSolution = async (endpoint) => {
    const result = await fetch(endpoint)
    return result;
  }

export default fetchSolution;

// export const postSolution = async (solution) => {
//     try {
//       const result = await fetch(`https://unstuck-rubberduck-api.herokuapp.com/api/v1/${solutionEndpoint}`, post);
//       const solution = await result.json();
//       return solution;
//     } catch (err) {
//       setError(err);
//     }
//   }

// export const fetchAffirmation = async () => {
//     try {
//       const result = await fetch(`https://www.affirmations.dev`);
//       const affirmation = await result.json();
//       return cleanData(affirmation, 'affirmation');
//     } catch (err) {
//       setError(err);
//     }
//   }
//
// export const fetchAdvice = async () => {
//     try {
//       const result = await fetch(`https://api.adviceslip.com/advice`);
//       const advice = await result.json();
//       return cleanData(advice, 'advice');
//     } catch (err) {
//       setError(err);
//     }
//   }
