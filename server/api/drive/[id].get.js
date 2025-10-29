// server/api/drive-proxy/[id].get.js
import axios from 'axios';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const response = await axios.get(driveUrl, { responseType: 'text' });
    return response.data;
  } catch (error) {
    console.error('Error fetching file from Google Drive:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching file from Google Drive',
    });
  }
});
// http://localhost:3000/api/drive/1F9qp1lez5WXEp6XpIIuhVnKF_ptMITUV