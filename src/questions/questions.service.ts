import { Injectable } from '@nestjs/common';
import { QuestionDto } from 'dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuestionsService {
  constructor(private prisma: PrismaService) {}
  async createQuestion() {
    const question = await this.prisma.questions.create({
      data: {
        title: 'Longest Substring Without Repeating Characters',
        description:
          'Given a string s, find the length of the longest substring without repeating characters.',
        difficulty: 'Medium',
        examples: {
          create: [
            {
              input: '"abcabcbb"',
              output: '3',
              explanation: 'The answer is "abc", with the length of 3.',
            },
            {
              input: '"bbbbb"',
              output: '1',
              explanation: 'The answer is "b", with the length of 1.',
            },
            {
              input: '"pwwkew"',
              output: '3',
              explanation:
                'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
            },
            { input: '""', output: '0', explanation: '' },
          ],
        },
        constraints: {
          create: [
            { description: '0 <= s.length <= 5 * 10^4' },
            {
              description:
                's consists of English letters, digits, symbols, and spaces.',
            },
          ],
        },
      },
    });
    return question;
  }

  async getQuestions() {
    const question = await this.prisma.questions.findMany();
    return question;
  }
}
