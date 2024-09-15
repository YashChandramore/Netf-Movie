import OpenAI from 'openai';
import { OpenAI_key } from './constant';

const openai = new OpenAI({
  apiKey: OpenAI_key, 
  dangerouslyAllowBrowser: true,// This is the default and can be omitted
});

export default openai;