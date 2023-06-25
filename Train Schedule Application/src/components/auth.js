const API_ENDPOINT = 'http://104.211.219.98/train/auth/';

async function authorize() {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      // Add any required headers or body parameters for authorization
    });

    if (!response.ok) {
      throw new Error('Failed to authorize');
    }

    const data = await response.json();
    const authToken = data.token;

    // Store the authorization token in a secure location (e.g., local storage or state management)

    console.log('Authorization successful');
  } catch (error) {
    console.error('Authorization error:', error);
  }
}

export { authorize };
