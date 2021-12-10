import { NextApiRequest, NextApiResponse } from "next";
import brain from "brain.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const { value1, value2 } = body;

      const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

      const trainingData = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
      ];

      net.train(trainingData);

      const result = net.run([+value1, +value2]);

      return res.status(201).json(result);
    } catch (e: any) {
      return res.status(400).json({ message: e.message });
    }
  }
}
