import React, { useState } from 'react';
import axios from 'axios';

export default function Test() {
  c
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-4xl font-bold">Words to Translate</h2>
      <ul className="text-2xl list-disc ml-6">
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>

      <button
        onClick={translator}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Translate to Hindi
      </button>

      {translations && (
        <ul>
          <li className="text-4xl font-bold mt-8">Translations</li>
          {translations.map(([word, trans]) => (
            <li key={word} className="text-xl bg-gray-100 p-4 rounded">
              <strong>{word}:</strong> {trans}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}