import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';

export async function extractTextFromFile(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const fileType = file.name.toLowerCase();

  try {
    if (fileType.endsWith('.pdf')) {
      const data = await pdfParse(buffer);
      return data.text;
    } else if (fileType.endsWith('.docx')) {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else if (fileType.endsWith('.doc')) {
      // Dla starszych plików .doc próbujemy mammoth
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } else {
      throw new Error('Nieobsługiwany format pliku. Użyj PDF lub DOCX.');
    }
  } catch (error) {
    console.error('Błąd podczas ekstrakcji tekstu:', error);
    throw new Error('Nie udało się wyodrębnić tekstu z pliku.');
  }
}

export function validateFileSize(file: File, maxSizeMB: number = 10): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

export function validateFileType(file: File): boolean {
  const allowedTypes = ['.pdf', '.docx', '.doc'];
  const fileName = file.name.toLowerCase();
  return allowedTypes.some(type => fileName.endsWith(type));
}
