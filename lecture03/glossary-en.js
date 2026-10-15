// Generated from the lesson pages' “नए शब्द” lists. Do not edit by hand.
window.GLOSSARY = {
"01-how-llms-answer-en.html#w-llm": {
"t": "LLM",
"d": "Large language model: a model that reads text and writes what comes next, one token at a time. For example, the model that wrote Wednesday afternoon.",
"h": "01-how-llms-answer-en.html#w-llm"
},
"w-llm": {
"t": "LLM",
"d": "Large language model: a model that reads text and writes what comes next, one token at a time. For example, the model that wrote Wednesday afternoon.",
"h": "01-how-llms-answer-en.html#w-llm"
},
"01-how-llms-answer-en.html#w-token": {
"t": "Token",
"d": "A small piece of text: a word, part of a word, or punctuation. The model reads and writes these. For example, crowded is two tokens, crowd and ed.",
"h": "01-how-llms-answer-en.html#w-token"
},
"w-token": {
"t": "Token",
"d": "A small piece of text: a word, part of a word, or punctuation. The model reads and writes these. For example, crowded is two tokens, crowd and ed.",
"h": "01-how-llms-answer-en.html#w-token"
},
"01-how-llms-answer-en.html#w-vocabulary": {
"t": "Vocabulary",
"d": "The model's fixed list of tokens, each with an ID number. For example, it contains Wednesday but not Wednesdayy.",
"h": "01-how-llms-answer-en.html#w-vocabulary"
},
"w-vocabulary": {
"t": "Vocabulary",
"d": "The model's fixed list of tokens, each with an ID number. For example, it contains Wednesday but not Wednesdayy.",
"h": "01-how-llms-answer-en.html#w-vocabulary"
},
"01-how-llms-answer-en.html#w-tokenizer": {
"t": "Tokenizer",
"d": "The program that splits text into the vocabulary's tokens. For example, it splits Wednesdayy into Wednesday and y.",
"h": "01-how-llms-answer-en.html#w-tokenizer"
},
"w-tokenizer": {
"t": "Tokenizer",
"d": "The program that splits text into the vocabulary's tokens. For example, it splits Wednesdayy into Wednesday and y.",
"h": "01-how-llms-answer-en.html#w-tokenizer"
},
"01-how-llms-answer-en.html#w-probability": {
"t": "Probability",
"d": "A number between 0 and 1 that gives the chance of something. The options always add up to 1. For example, a quiz in 5 of 20 lectures gives 5 ÷ 20 = 0.25.",
"h": "01-how-llms-answer-en.html#w-probability"
},
"w-probability": {
"t": "Probability",
"d": "A number between 0 and 1 that gives the chance of something. The options always add up to 1. For example, a quiz in 5 of 20 lectures gives 5 ÷ 20 = 0.25.",
"h": "01-how-llms-answer-en.html#w-probability"
},
"01-how-llms-answer-en.html#w-ntp": {
"t": "Next-token prediction",
"d": "Looking at the text so far, giving every token a probability, picking one, adding it, and repeating. For example, Wednesday, then afternoon, then a full stop.",
"h": "01-how-llms-answer-en.html#w-ntp"
},
"w-ntp": {
"t": "Next-token prediction",
"d": "Looking at the text so far, giving every token a probability, picking one, adding it, and repeating. For example, Wednesday, then afternoon, then a full stop.",
"h": "01-how-llms-answer-en.html#w-ntp"
},
"01-how-llms-answer-en.html#w-parameters": {
"t": "Parameters (weights)",
"d": "The numbers inside a model that produce the probability of every next token. For example, T5-11B has about 11 billion parameters.",
"h": "01-how-llms-answer-en.html#w-parameters"
},
"w-parameters": {
"t": "Parameters (weights)",
"d": "The numbers inside a model that produce the probability of every next token. For example, T5-11B has about 11 billion parameters.",
"h": "01-how-llms-answer-en.html#w-parameters"
},
"01-how-llms-answer-en.html#w-training": {
"t": "Training",
"d": "Changing the parameters little by little so that the real next token in the text gets a higher probability. For example, Thursday after Office hours are on goes from 0.10 to 0.12.",
"h": "01-how-llms-answer-en.html#w-training"
},
"w-training": {
"t": "Training",
"d": "Changing the parameters little by little so that the real next token in the text gets a higher probability. For example, Thursday after Office hours are on goes from 0.10 to 0.12.",
"h": "01-how-llms-answer-en.html#w-training"
},
"01-how-llms-answer-en.html#w-parametric": {
"t": "Parametric knowledge",
"d": "Knowledge spread across the parameters. The model cannot name its source, and a new fact needs training again.",
"h": "01-how-llms-answer-en.html#w-parametric"
},
"w-parametric": {
"t": "Parametric knowledge",
"d": "Knowledge spread across the parameters. The model cannot name its source, and a new fact needs training again.",
"h": "01-how-llms-answer-en.html#w-parametric"
},
"01-how-llms-answer-en.html#w-cutoff": {
"t": "Knowledge cutoff",
"d": "The date on which training stopped. Later events, and your private data, are not in the model. For example, with a March 2026 cutoff, an October 2026 announcement is not in the model.",
"h": "01-how-llms-answer-en.html#w-cutoff"
},
"w-cutoff": {
"t": "Knowledge cutoff",
"d": "The date on which training stopped. Later events, and your private data, are not in the model. For example, with a March 2026 cutoff, an October 2026 announcement is not in the model.",
"h": "01-how-llms-answer-en.html#w-cutoff"
},
"01-how-llms-answer-en.html#w-prompt": {
"t": "Prompt",
"d": "The text you give the model right now: the question, instructions, and accompanying documents. For example, the queue log line that lifted Thursday from 0.21 to 0.81.",
"h": "01-how-llms-answer-en.html#w-prompt"
},
"w-prompt": {
"t": "Prompt",
"d": "The text you give the model right now: the question, instructions, and accompanying documents. For example, the queue log line that lifted Thursday from 0.21 to 0.81.",
"h": "01-how-llms-answer-en.html#w-prompt"
},
"01-how-llms-answer-en.html#w-context": {
"t": "Context window",
"d": "The most tokens a model can read at once. Both the prompt and the answer count. For example, an 8,000-token window with a 7,500-token prompt leaves 500 for the answer.",
"h": "01-how-llms-answer-en.html#w-context"
},
"w-context": {
"t": "Context window",
"d": "The most tokens a model can read at once. Both the prompt and the answer count. For example, an 8,000-token window with a 7,500-token prompt leaves 500 for the answer.",
"h": "01-how-llms-answer-en.html#w-context"
},
"01-how-llms-answer-en.html#w-hallucination": {
"t": "Hallucination",
"d": "A confident answer that is wrong or has no source. For example, Wednesday afternoon, written without seeing the log.",
"h": "01-how-llms-answer-en.html#w-hallucination"
},
"w-hallucination": {
"t": "Hallucination",
"d": "A confident answer that is wrong or has no source. For example, Wednesday afternoon, written without seeing the log.",
"h": "01-how-llms-answer-en.html#w-hallucination"
},
"01-how-llms-answer-dense-en.html#w-decoding": {
"t": "Greedy decoding and sampling",
"d": "Greedy decoding takes the highest-probability token at every step, and sampling chooses at random according to the probabilities. For example, greedy always writes Wednesday afternoon, while sampling starts with Thursday about 21 times in 100.",
"h": "01-how-llms-answer-dense-en.html#w-decoding"
},
"w-decoding": {
"t": "Greedy decoding and sampling",
"d": "Greedy decoding takes the highest-probability token at every step, and sampling chooses at random according to the probabilities. For example, greedy always writes Wednesday afternoon, while sampling starts with Thursday about 21 times in 100.",
"h": "01-how-llms-answer-dense-en.html#w-decoding"
},
"01-how-llms-answer-dense-en.html#w-ssm": {
"t": "Salient span masking (SSM)",
"d": "An extra round of pretraining in which the model fills in blanked-out names and dates in Wikipedia sentences. For example, it lifted T5-11B's TriviaQA score from 50.1 to 60.5.",
"h": "01-how-llms-answer-dense-en.html#w-ssm"
},
"w-ssm": {
"t": "Salient span masking (SSM)",
"d": "An extra round of pretraining in which the model fills in blanked-out names and dates in Wikipedia sentences. For example, it lifted T5-11B's TriviaQA score from 50.1 to 60.5.",
"h": "01-how-llms-answer-dense-en.html#w-ssm"
},
"01-how-llms-answer-dense-en.html#w-bart": {
"t": "BART",
"d": "A model that reads text and writes text, with about 400 million parameters. It is RAG's generator. For example, in the Jeopardy test BART on its own was judged more factual in only 7.1% of pairs.",
"h": "01-how-llms-answer-dense-en.html#w-bart"
},
"w-bart": {
"t": "BART",
"d": "A model that reads text and writes text, with about 400 million parameters. It is RAG's generator. For example, in the Jeopardy test BART on its own was judged more factual in only 7.1% of pairs.",
"h": "01-how-llms-answer-dense-en.html#w-bart"
},
"01-how-llms-answer-dense-en.html#w-hotswap": {
"t": "Index hot-swapping",
"d": "Replacing the document index without touching the parameters, so that the model's knowledge changes. For example, the 2018 index answered 68% of questions about 2018 leaders correctly, and the 2016 index only 4%.",
"h": "01-how-llms-answer-dense-en.html#w-hotswap"
},
"w-hotswap": {
"t": "Index hot-swapping",
"d": "Replacing the document index without touching the parameters, so that the model's knowledge changes. For example, the 2018 index answered 68% of questions about 2018 leaders correctly, and the 2016 index only 4%.",
"h": "01-how-llms-answer-dense-en.html#w-hotswap"
},
"02-retrieval-en.html#w-corpus": {
"t": "Corpus (collection)",
"d": "The set of all documents. For example, the company's 2,000 documents, or this course's 6 short texts.",
"h": "02-retrieval-en.html#w-corpus"
},
"w-corpus": {
"t": "Corpus (collection)",
"d": "The set of all documents. For example, the company's 2,000 documents, or this course's 6 short texts.",
"h": "02-retrieval-en.html#w-corpus"
},
"02-retrieval-en.html#w-document": {
"t": "Document",
"d": "One item in the corpus: a web page, a file or an email. For example, the course syllabus.",
"h": "02-retrieval-en.html#w-document"
},
"w-document": {
"t": "Document",
"d": "One item in the corpus: a web page, a file or an email. For example, the course syllabus.",
"h": "02-retrieval-en.html#w-document"
},
"02-retrieval-en.html#w-passage": {
"t": "Passage",
"d": "A small piece of a document, which the retriever returns. For example, the syllabus paragraph that holds the milestone date.",
"h": "02-retrieval-en.html#w-passage"
},
"w-passage": {
"t": "Passage",
"d": "A small piece of a document, which the retriever returns. For example, the syllabus paragraph that holds the milestone date.",
"h": "02-retrieval-en.html#w-passage"
},
"02-retrieval-en.html#w-query": {
"t": "Query",
"d": "The question you search for. For example, “which office hour is least crowded”.",
"h": "02-retrieval-en.html#w-query"
},
"w-query": {
"t": "Query",
"d": "The question you search for. For example, “which office hour is least crowded”.",
"h": "02-retrieval-en.html#w-query"
},
"02-retrieval-en.html#w-retrieval": {
"t": "Retrieval",
"d": "Finding useful passages for a query and putting them into the prompt. For example, the queue log going into the prompt with the question.",
"h": "02-retrieval-en.html#w-retrieval"
},
"w-retrieval": {
"t": "Retrieval",
"d": "Finding useful passages for a query and putting them into the prompt. For example, the queue log going into the prompt with the question.",
"h": "02-retrieval-en.html#w-retrieval"
},
"02-retrieval-en.html#w-citation": {
"t": "Citation",
"d": "The source written next to an answer. For example, the [P3] in “Thursday 9am [P3]”, which points to the queue log.",
"h": "02-retrieval-en.html#w-citation"
},
"w-citation": {
"t": "Citation",
"d": "The source written next to an answer. For example, the [P3] in “Thursday 9am [P3]”, which points to the queue log.",
"h": "02-retrieval-en.html#w-citation"
},
"02-retrieval-en.html#w-nonparam": {
"t": "Non-parametric memory",
"d": "Knowledge kept outside the model, in the corpus. For example, the queue log: changing it needs no training.",
"h": "02-retrieval-en.html#w-nonparam"
},
"w-nonparam": {
"t": "Non-parametric memory",
"d": "Knowledge kept outside the model, in the corpus. For example, the queue log: changing it needs no training.",
"h": "02-retrieval-en.html#w-nonparam"
},
"02-retrieval-en.html#w-retriever": {
"t": "Retriever",
"d": "The part that scores every passage and returns the top K. For example, this lesson's word-overlap retriever.",
"h": "02-retrieval-en.html#w-retriever"
},
"w-retriever": {
"t": "Retriever",
"d": "The part that scores every passage and returns the top K. For example, this lesson's word-overlap retriever.",
"h": "02-retrieval-en.html#w-retriever"
},
"02-retrieval-en.html#w-score": {
"t": "Score",
"d": "A number for how useful a passage is for the query. For example, the queue log's word-overlap score of 2.",
"h": "02-retrieval-en.html#w-score"
},
"w-score": {
"t": "Score",
"d": "A number for how useful a passage is for the query. For example, the queue log's word-overlap score of 2.",
"h": "02-retrieval-en.html#w-score"
},
"02-retrieval-en.html#w-topk": {
"t": "Top-K",
"d": "The K passages with the highest scores. For example, the queue log and the old forum post at K = 2.",
"h": "02-retrieval-en.html#w-topk"
},
"w-topk": {
"t": "Top-K",
"d": "The K passages with the highest scores. For example, the queue log and the old forum post at K = 2.",
"h": "02-retrieval-en.html#w-topk"
},
"02-retrieval-en.html#w-overlap": {
"t": "Word overlap",
"d": "How many of the query's words appear in the passage. The simplest score. For example, the queue log has office and hour, so its score is 2.",
"h": "02-retrieval-en.html#w-overlap"
},
"w-overlap": {
"t": "Word overlap",
"d": "How many of the query's words appear in the passage. The simplest score. For example, the queue log has office and hour, so its score is 2.",
"h": "02-retrieval-en.html#w-overlap"
},
"02-retrieval-en.html#w-stopwords": {
"t": "Stopwords",
"d": "Very common words such as is, the and which, left out of the count. From “which office hour is least crowded”, which and is are removed.",
"h": "02-retrieval-en.html#w-stopwords"
},
"w-stopwords": {
"t": "Stopwords",
"d": "Very common words such as is, the and which, left out of the count. From “which office hour is least crowded”, which and is are removed.",
"h": "02-retrieval-en.html#w-stopwords"
},
"02-retrieval-en.html#w-reader": {
"t": "Reader",
"d": "The part that reads the query and the top-K passages and writes the answer. Today usually an LLM. For example, reading the queue log and writing “Thursday 9am”.",
"h": "02-retrieval-en.html#w-reader"
},
"w-reader": {
"t": "Reader",
"d": "The part that reads the query and the top-K passages and writes the answer. Today usually an LLM. For example, reading the queue log and writing “Thursday 9am”.",
"h": "02-retrieval-en.html#w-reader"
},
"02-retrieval-en.html#w-zeroshot": {
"t": "Zero-shot",
"d": "Doing a task from an instruction alone, without training on that task. For example, the prompt line “Answer the question using the passage below”.",
"h": "02-retrieval-en.html#w-zeroshot"
},
"w-zeroshot": {
"t": "Zero-shot",
"d": "Doing a task from an instruction alone, without training on that task. For example, the prompt line “Answer the question using the passage below”.",
"h": "02-retrieval-en.html#w-zeroshot"
},
"02-retrieval-en.html#w-recall": {
"t": "Recall",
"d": "How often the retriever finds the passage that is needed. For example, 60 out of 100 questions gives a recall of 60%.",
"h": "02-retrieval-en.html#w-recall"
},
"w-recall": {
"t": "Recall",
"d": "How often the retriever finds the passage that is needed. For example, 60 out of 100 questions gives a recall of 60%.",
"h": "02-retrieval-en.html#w-recall"
},
"02-retrieval-en.html#w-ceiling": {
"t": "Recall ceiling",
"d": "The retriever's recall becomes the upper limit of the whole system. With a recall of 60%, no reader can get more than 60 of 100 answers from the passages.",
"h": "02-retrieval-en.html#w-ceiling"
},
"w-ceiling": {
"t": "Recall ceiling",
"d": "The retriever's recall becomes the upper limit of the whole system. With a recall of 60%, no reader can get more than 60 of 100 answers from the passages.",
"h": "02-retrieval-en.html#w-ceiling"
},
"02-retrieval-dense-en.html#w-readcomp": {
"t": "Reading comprehension",
"d": "Answering a question about a text you are given. This is the reader's job after the retriever. For example, reading the Ottoman empire paragraph and answering 32.",
"h": "02-retrieval-dense-en.html#w-readcomp"
},
"w-readcomp": {
"t": "Reading comprehension",
"d": "Answering a question about a text you are given. This is the reader's job after the retriever. For example, reading the Ottoman empire paragraph and answering 32.",
"h": "02-retrieval-dense-en.html#w-readcomp"
},
"02-retrieval-dense-en.html#w-squad": {
"t": "SQuAD",
"d": "Stanford Question Answering Dataset: questions people wrote about Wikipedia paragraphs, with the answer always a span of the paragraph. For example, 87,599 training questions.",
"h": "02-retrieval-dense-en.html#w-squad"
},
"w-squad": {
"t": "SQuAD",
"d": "Stanford Question Answering Dataset: questions people wrote about Wikipedia paragraphs, with the answer always a span of the paragraph. For example, 87,599 training questions.",
"h": "02-retrieval-dense-en.html#w-squad"
},
"02-retrieval-dense-en.html#w-opendomain": {
"t": "Open-domain QA",
"d": "A question on any topic that comes without its paragraph, so the system has to find it in the whole corpus. For example, DrQA's Warsaw question over all of Wikipedia.",
"h": "02-retrieval-dense-en.html#w-opendomain"
},
"w-opendomain": {
"t": "Open-domain QA",
"d": "A question on any topic that comes without its paragraph, so the system has to find it in the whole corpus. For example, DrQA's Warsaw question over all of Wikipedia.",
"h": "02-retrieval-dense-en.html#w-opendomain"
},
"02-retrieval-dense-en.html#w-drqa": {
"t": "DrQA",
"d": "A 2017 retriever-reader system: a fixed TF-IDF retriever returns 5 Wikipedia articles, and a neural reader picks a span from them. For example, 833,500 for the Warsaw question.",
"h": "02-retrieval-dense-en.html#w-drqa"
},
"w-drqa": {
"t": "DrQA",
"d": "A 2017 retriever-reader system: a fixed TF-IDF retriever returns 5 Wikipedia articles, and a neural reader picks a span from them. For example, 833,500 for the Warsaw question.",
"h": "02-retrieval-dense-en.html#w-drqa"
},
"02-retrieval-dense-en.html#w-bigram": {
"t": "Bigram",
"d": "Two words that appear side by side. For example, office hour in the queue log, and least crowded in the forum post.",
"h": "02-retrieval-dense-en.html#w-bigram"
},
"w-bigram": {
"t": "Bigram",
"d": "Two words that appear side by side. For example, office hour in the queue log, and least crowded in the forum post.",
"h": "02-retrieval-dense-en.html#w-bigram"
},
"02-retrieval-dense-en.html#w-distant": {
"t": "Distant supervision",
"d": "Finding paragraphs automatically for data that has only questions and answers: run the retriever and keep the passages that contain the answer text exactly. For example, the syllabus for the milestone question.",
"h": "02-retrieval-dense-en.html#w-distant"
},
"w-distant": {
"t": "Distant supervision",
"d": "Finding paragraphs automatically for data that has only questions and answers: run the retriever and keep the passages that contain the answer text exactly. For example, the syllabus for the milestone question.",
"h": "02-retrieval-dense-en.html#w-distant"
},
"03-vectors-en.html#w-vector": {
"t": "Vector",
"d": "A list of numbers with a fixed length, such as [0.9, 0.1]. With 2 numbers, it is an arrow on a plane.",
"h": "03-vectors-en.html#w-vector"
},
"w-vector": {
"t": "Vector",
"d": "A list of numbers with a fixed length, such as [0.9, 0.1]. With 2 numbers, it is an arrow on a plane.",
"h": "03-vectors-en.html#w-vector"
},
"03-vectors-en.html#w-dimension": {
"t": "Dimension",
"d": "How many numbers a vector has. For example, [0.9, 0.1] has dimension 2, and BERT-base vectors have 768.",
"h": "03-vectors-en.html#w-dimension"
},
"w-dimension": {
"t": "Dimension",
"d": "How many numbers a vector has. For example, [0.9, 0.1] has dimension 2, and BERT-base vectors have 768.",
"h": "03-vectors-en.html#w-dimension"
},
"03-vectors-en.html#w-dot": {
"t": "Dot product (inner product)",
"d": "Multiply the numbers in the same position, then add them all. For example, [0.8, 0.2] and [0.9, 0.1]: 0.72 + 0.02 = 0.74.",
"h": "03-vectors-en.html#w-dot"
},
"w-dot": {
"t": "Dot product (inner product)",
"d": "Multiply the numbers in the same position, then add them all. For example, [0.8, 0.2] and [0.9, 0.1]: 0.72 + 0.02 = 0.74.",
"h": "03-vectors-en.html#w-dot"
},
"03-vectors-en.html#w-sigma": {
"t": "∑ (sigma)",
"d": "Keep adding over the range written below it. For example, the sum of a<sub>i</sub>b<sub>i</sub> for i = 1 to 2 is a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub>.",
"h": "03-vectors-en.html#w-sigma"
},
"w-sigma": {
"t": "∑ (sigma)",
"d": "Keep adding over the range written below it. For example, the sum of a<sub>i</sub>b<sub>i</sub> for i = 1 to 2 is a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub>.",
"h": "03-vectors-en.html#w-sigma"
},
"03-vectors-en.html#w-length": {
"t": "Length",
"d": "The length of the arrow: square each number, add the squares, take the square root. For example, [0.8, 0.2] has length √(0.64 + 0.04) = 0.82.",
"h": "03-vectors-en.html#w-length"
},
"w-length": {
"t": "Length",
"d": "The length of the arrow: square each number, add the squares, take the square root. For example, [0.8, 0.2] has length √(0.64 + 0.04) = 0.82.",
"h": "03-vectors-en.html#w-length"
},
"03-vectors-en.html#w-cosine": {
"t": "Cosine similarity",
"d": "The dot product divided by the product of both lengths. It looks only at direction and stays between −1 and 1. For example, 0.74 ÷ (0.82 × 0.91) = 0.99.",
"h": "03-vectors-en.html#w-cosine"
},
"w-cosine": {
"t": "Cosine similarity",
"d": "The dot product divided by the product of both lengths. It looks only at direction and stays between −1 and 1. For example, 0.74 ÷ (0.82 × 0.91) = 0.99.",
"h": "03-vectors-en.html#w-cosine"
},
"03-vectors-en.html#w-normalize": {
"t": "Normalize",
"d": "Divide every number in a vector by its length, so the length becomes 1 and the direction stays the same. For example, [0.8, 0.2] ÷ 0.82 = [0.97, 0.24].",
"h": "03-vectors-en.html#w-normalize"
},
"w-normalize": {
"t": "Normalize",
"d": "Divide every number in a vector by its length, so the length becomes 1 and the direction stays the same. For example, [0.8, 0.2] ÷ 0.82 = [0.97, 0.24].",
"h": "03-vectors-en.html#w-normalize"
},
"03-vectors-en.html#w-embedding": {
"t": "Embedding",
"d": "A text's vector, produced by a trained model. Texts saying similar things point in similar directions, such as “help from a TA” and “run by the TAs”.",
"h": "03-vectors-en.html#w-embedding"
},
"w-embedding": {
"t": "Embedding",
"d": "A text's vector, produced by a trained model. Texts saying similar things point in similar directions, such as “help from a TA” and “run by the TAs”.",
"h": "03-vectors-en.html#w-embedding"
},
"03-vectors-en.html#w-encoder": {
"t": "Embedding model (encoder)",
"d": "A model that reads a text and produces its fixed-length embedding. For example, turning the query into a vector like [0.8, 0.2].",
"h": "03-vectors-en.html#w-encoder"
},
"w-encoder": {
"t": "Embedding model (encoder)",
"d": "A model that reads a text and produces its fixed-length embedding. For example, turning the query into a vector like [0.8, 0.2].",
"h": "03-vectors-en.html#w-encoder"
},
"03-vectors-en.html#w-index": {
"t": "Index",
"d": "The list of passage embeddings built in advance. For example, 60,000 vectors for 60,000 passages.",
"h": "03-vectors-en.html#w-index"
},
"w-index": {
"t": "Index",
"d": "The list of passage embeddings built in advance. For example, 60,000 vectors for 60,000 passages.",
"h": "03-vectors-en.html#w-index"
},
"03-vectors-en.html#w-offline": {
"t": "Offline and online",
"d": "Offline: once, before any query arrives, such as building the passage embeddings. Online: on every query, such as making the query's embedding.",
"h": "03-vectors-en.html#w-offline"
},
"w-offline": {
"t": "Offline and online",
"d": "Offline: once, before any query arrives, such as building the passage embeddings. Online: on every query, such as making the query's embedding.",
"h": "03-vectors-en.html#w-offline"
},
"03-vectors-dense-en.html#w-matrix": {
"t": "Matrix and matrix-vector product",
"d": "A table of numbers in rows and columns, and the dot product of each of its rows with a vector. For example, our 4 × 2 index times the query [0.8, 0.2] = [0.74, 0.26, 0.32, 1.56].",
"h": "03-vectors-dense-en.html#w-matrix"
},
"w-matrix": {
"t": "Matrix and matrix-vector product",
"d": "A table of numbers in rows and columns, and the dot product of each of its rows with a vector. For example, our 4 × 2 index times the query [0.8, 0.2] = [0.74, 0.26, 0.32, 1.56].",
"h": "03-vectors-dense-en.html#w-matrix"
},
"03-vectors-dense-en.html#w-decomposable": {
"t": "Decomposable similarity",
"d": "A score that comes from a question vector and a passage vector, where the passage vector is built without seeing the question. Only then can an offline index exist. For example, the dot product, cosine and distance.",
"h": "03-vectors-dense-en.html#w-decomposable"
},
"w-decomposable": {
"t": "Decomposable similarity",
"d": "A score that comes from a question vector and a passage vector, where the passage vector is built without seeing the question. Only then can an offline index exist. For example, the dot product, cosine and distance.",
"h": "03-vectors-dense-en.html#w-decomposable"
},
"04-probability-tools-en.html#w-conditional": {
"t": "Conditional probability, p(A|B)",
"d": "The probability of A when B is known. Read “|” as “given”. For example, p(full | Tuesday) = 16 ÷ 20 = 0.80.",
"h": "04-probability-tools-en.html#w-conditional"
},
"w-conditional": {
"t": "Conditional probability, p(A|B)",
"d": "The probability of A when B is known. Read “|” as “given”. For example, p(full | Tuesday) = 16 ÷ 20 = 0.80.",
"h": "04-probability-tools-en.html#w-conditional"
},
"04-probability-tools-en.html#w-chain": {
"t": "Chain rule (for probabilities)",
"d": "p(A and B) = p(A) × p(B|A). With many steps, multiply them all. For example, p(Tuesday) × p(full | Tuesday) = 0.5 × 0.8 = 0.40. The chain rule for rates in lesson 12 is a different rule.",
"h": "04-probability-tools-en.html#w-chain"
},
"w-chain": {
"t": "Chain rule (for probabilities)",
"d": "p(A and B) = p(A) × p(B|A). With many steps, multiply them all. For example, p(Tuesday) × p(full | Tuesday) = 0.5 × 0.8 = 0.40. The chain rule for rates in lesson 12 is a different rule.",
"h": "04-probability-tools-en.html#w-chain"
},
"04-probability-tools-en.html#w-prod": {
"t": "∏ (capital pi)",
"d": "Multiply everything over the range written below it. For example, for three tokens, 0.21 × 0.31 × 0.71 = 0.046.",
"h": "04-probability-tools-en.html#w-prod"
},
"w-prod": {
"t": "∏ (capital pi)",
"d": "Multiply everything over the range written below it. For example, for three tokens, 0.21 × 0.31 × 0.71 = 0.046.",
"h": "04-probability-tools-en.html#w-prod"
},
"04-probability-tools-en.html#w-marginal": {
"t": "Marginalization",
"d": "Each case's weight times the probability within that case, added up over all cases. For example, 0.5 × 0.8 + 0.5 × 0.1 = 0.45.",
"h": "04-probability-tools-en.html#w-marginal"
},
"w-marginal": {
"t": "Marginalization",
"d": "Each case's weight times the probability within that case, added up over all cases. For example, 0.5 × 0.8 + 0.5 × 0.1 = 0.45.",
"h": "04-probability-tools-en.html#w-marginal"
},
"04-probability-tools-en.html#w-approx": {
"t": "≈",
"d": "Approximately equal. The RAG formula adds up only the top-K passages, so the sum is only approximately equal.",
"h": "04-probability-tools-en.html#w-approx"
},
"w-approx": {
"t": "≈",
"d": "Approximately equal. The RAG formula adds up only the top-K passages, so the sum is only approximately equal.",
"h": "04-probability-tools-en.html#w-approx"
},
"04-probability-tools-en.html#w-exp": {
"t": "exp and e",
"d": "exp(s) = e<sup>s</sup>, where e is about 2.718. Always above 0, and e<sup>a+1</sup> = e<sup>a</sup> × e. For example, exp(1) = 2.718, exp(0) = 1, exp(−1) = 0.368.",
"h": "04-probability-tools-en.html#w-exp"
},
"w-exp": {
"t": "exp and e",
"d": "exp(s) = e<sup>s</sup>, where e is about 2.718. Always above 0, and e<sup>a+1</sup> = e<sup>a</sup> × e. For example, exp(1) = 2.718, exp(0) = 1, exp(−1) = 0.368.",
"h": "04-probability-tools-en.html#w-exp"
},
"04-probability-tools-en.html#w-softmax": {
"t": "Softmax",
"d": "The exp of each score, divided by the sum of all the exps. It turns scores into probabilities. For example, 2.0, 1.0, 0.1 become 0.659, 0.242, 0.099.",
"h": "04-probability-tools-en.html#w-softmax"
},
"w-softmax": {
"t": "Softmax",
"d": "The exp of each score, divided by the sum of all the exps. It turns scores into probabilities. For example, 2.0, 1.0, 0.1 become 0.659, 0.242, 0.099.",
"h": "04-probability-tools-en.html#w-softmax"
},
"04-probability-tools-en.html#w-propto": {
"t": "∝",
"d": "Is proportional to. At the end, divide everything by one number so that the total is 1. For example, exps 2.718 and 1 become 0.731 and 0.269.",
"h": "04-probability-tools-en.html#w-propto"
},
"w-propto": {
"t": "∝",
"d": "Is proportional to. At the end, divide everything by one number so that the total is 1. For example, exps 2.718 and 1 become 0.731 and 0.269.",
"h": "04-probability-tools-en.html#w-propto"
},
"04-probability-tools-en.html#w-transpose": {
"t": "d<sup>⊤</sup>q",
"d": "A way of writing the dot product of vectors d and q. For example, the office hours page [0.9, 0.1] and the question [0.8, 0.2] give 0.74.",
"h": "04-probability-tools-en.html#w-transpose"
},
"w-transpose": {
"t": "d<sup>⊤</sup>q",
"d": "A way of writing the dot product of vectors d and q. For example, the office hours page [0.9, 0.1] and the question [0.8, 0.2] give 0.74.",
"h": "04-probability-tools-en.html#w-transpose"
},
"04-probability-tools-en.html#w-ln": {
"t": "Natural log, ln",
"d": "The power you raise e to in order to get x. ln(e<sup>x</sup>) = x, and ln(a × b) = ln a + ln b. For example, ln(0.1) = −2.303.",
"h": "04-probability-tools-en.html#w-ln"
},
"w-ln": {
"t": "Natural log, ln",
"d": "The power you raise e to in order to get x. ln(e<sup>x</sup>) = x, and ln(a × b) = ln a + ln b. For example, ln(0.1) = −2.303.",
"h": "04-probability-tools-en.html#w-ln"
},
"04-probability-tools-en.html#w-loss": {
"t": "Loss",
"d": "A number for how wrong the model is. Training makes it small. For example, if the right answer has probability 0.5, the loss is −ln 0.5 = 0.693.",
"h": "04-probability-tools-en.html#w-loss"
},
"w-loss": {
"t": "Loss",
"d": "A number for how wrong the model is. Training makes it small. For example, if the right answer has probability 0.5, the loss is −ln 0.5 = 0.693.",
"h": "04-probability-tools-en.html#w-loss"
},
"04-probability-tools-en.html#w-likelihood": {
"t": "Likelihood",
"d": "The probability the model gave the correct data. For example, if it gave the right answer 0.12, the likelihood is 0.12.",
"h": "04-probability-tools-en.html#w-likelihood"
},
"w-likelihood": {
"t": "Likelihood",
"d": "The probability the model gave the correct data. For example, if it gave the right answer 0.12, the likelihood is 0.12.",
"h": "04-probability-tools-en.html#w-likelihood"
},
"04-probability-tools-en.html#w-nll": {
"t": "Negative log-likelihood",
"d": "−ln p(right answer). The most common loss. For example, at p = 0.12, −ln 0.12 = 2.120.",
"h": "04-probability-tools-en.html#w-nll"
},
"w-nll": {
"t": "Negative log-likelihood",
"d": "−ln p(right answer). The most common loss. For example, at p = 0.12, −ln 0.12 = 2.120.",
"h": "04-probability-tools-en.html#w-nll"
},
"04-probability-tools-en.html#w-gradient": {
"t": "Gradient",
"d": "The calculation of which way, and how much, to change each parameter so that the loss goes down. For example, in lesson 1 training moved the parameters in the direction that raised Thursday's probability from 0.10 to 0.12 and lowered the loss from 2.303 to 2.120.",
"h": "04-probability-tools-en.html#w-gradient"
},
"w-gradient": {
"t": "Gradient",
"d": "The calculation of which way, and how much, to change each parameter so that the loss goes down. For example, in lesson 1 training moved the parameters in the direction that raised Thursday's probability from 0.10 to 0.12 and lowered the loss from 2.303 to 2.120.",
"h": "04-probability-tools-en.html#w-gradient"
},
"04-probability-tools-dense-en.html#w-normalizer": {
"t": "Normalizer, Z",
"d": "In softmax, the sum of all the exps. Dividing by it makes the weights add up to 1, and it is the division hidden behind ∝. For example, for exps 2.718 and 1, Z = 3.718.",
"h": "04-probability-tools-dense-en.html#w-normalizer"
},
"w-normalizer": {
"t": "Normalizer, Z",
"d": "In softmax, the sum of all the exps. Dividing by it makes the weights add up to 1, and it is the division hidden behind ∝. For example, for exps 2.718 and 1, Z = 3.718.",
"h": "04-probability-tools-dense-en.html#w-normalizer"
},
"04-probability-tools-dense-en.html#w-colvec": {
"t": "Column vector and ⊤",
"d": "A column vector has its numbers written one above the other, and ⊤ (transpose) turns it into a row. A row times a column is the dot product. For example, the row [0.9, 0.1] times the column [0.8, 0.2] = 0.74.",
"h": "04-probability-tools-dense-en.html#w-colvec"
},
"w-colvec": {
"t": "Column vector and ⊤",
"d": "A column vector has its numbers written one above the other, and ⊤ (transpose) turns it into a row. A row times a column is the dot product. For example, the row [0.9, 0.1] times the column [0.8, 0.2] = 0.74.",
"h": "04-probability-tools-dense-en.html#w-colvec"
},
"04-probability-tools-dense-en.html#w-increasing": {
"t": "Increasing function",
"d": "A function where a larger input always gives a larger output, so the order is kept. exp and ln are such functions. For example, scores 1.56 and 0.74 give weights 0.499 and 0.220, in the same order.",
"h": "04-probability-tools-dense-en.html#w-increasing"
},
"w-increasing": {
"t": "Increasing function",
"d": "A function where a larger input always gives a larger output, so the order is kept. exp and ln are such functions. For example, scores 1.56 and 0.74 give weights 0.499 and 0.220, in the same order.",
"h": "04-probability-tools-dense-en.html#w-increasing"
},
"04-probability-tools-dense-en.html#w-nmll": {
"t": "Negative marginal log-likelihood",
"d": "−ln of the right answer's probability, when that probability comes from marginalization over passages, added up over all examples. RAG's training loss. For example, over two examples 0.378 + 0.693 = 1.071.",
"h": "04-probability-tools-dense-en.html#w-nmll"
},
"w-nmll": {
"t": "Negative marginal log-likelihood",
"d": "−ln of the right answer's probability, when that probability comes from marginalization over passages, added up over all examples. RAG's training loss. For example, over two examples 0.378 + 0.693 = 1.071.",
"h": "04-probability-tools-dense-en.html#w-nmll"
},
"05-rag-model-en.html#w-rag": {
"t": "RAG",
"d": "Retrieval-Augmented Generation: joining a retriever and a generator into one model and training them together with one loss. For example, bringing the queue log and writing <q>Thursday 9am</q> from it.",
"h": "05-rag-model-en.html#w-rag"
},
"w-rag": {
"t": "RAG",
"d": "Retrieval-Augmented Generation: joining a retriever and a generator into one model and training them together with one loss. For example, bringing the queue log and writing <q>Thursday 9am</q> from it.",
"h": "05-rag-model-en.html#w-rag"
},
"05-rag-model-en.html#w-latent": {
"t": "Latent variable",
"d": "A hidden choice that the data does not record. In RAG, the choice of which passage the answer came from. For example, a question-answer pair does not say that the answer came from the queue log.",
"h": "05-rag-model-en.html#w-latent"
},
"w-latent": {
"t": "Latent variable",
"d": "A hidden choice that the data does not record. In RAG, the choice of which passage the answer came from. For example, a question-answer pair does not say that the answer came from the queue log.",
"h": "05-rag-model-en.html#w-latent"
},
"05-rag-model-en.html#w-eta-theta": {
"t": "η and θ",
"d": "The names of the retriever's (eta) and the generator's (theta) parameters. That is why the retriever is written p<sub>η</sub>(z|x) and the generator p<sub>θ</sub>(y|x, z).",
"h": "05-rag-model-en.html#w-eta-theta"
},
"w-eta-theta": {
"t": "η and θ",
"d": "The names of the retriever's (eta) and the generator's (theta) parameters. That is why the retriever is written p<sub>η</sub>(z|x) and the generator p<sub>θ</sub>(y|x, z).",
"h": "05-rag-model-en.html#w-eta-theta"
},
"05-rag-model-en.html#w-bert": {
"t": "BERT",
"d": "An encoder model Google released in 2018. Both of the RAG retriever's encoders, the query encoder and the passage encoder, are built from it.",
"h": "05-rag-model-en.html#w-bert"
},
"w-bert": {
"t": "BERT",
"d": "An encoder model Google released in 2018. Both of the RAG retriever's encoders, the query encoder and the passage encoder, are built from it.",
"h": "05-rag-model-en.html#w-bert"
},
"05-rag-model-en.html#w-mips": {
"t": "MIPS",
"d": "Maximum inner product search: finding the K passages in the index with the largest dot products. For example, the 5 highest scores among 21 million passages.",
"h": "05-rag-model-en.html#w-mips"
},
"w-mips": {
"t": "MIPS",
"d": "Maximum inner product search: finding the K passages in the index with the largest dot products. For example, the 5 highest scores among 21 million passages.",
"h": "05-rag-model-en.html#w-mips"
},
"05-rag-model-en.html#w-generator": {
"t": "Generator",
"d": "The model that reads the question and one passage and writes the answer, p<sub>θ</sub>(y|x, z). In RAG it is BART. For example, 0.9 for <q>Thursday 9am</q> with the queue log.",
"h": "05-rag-model-en.html#w-generator"
},
"w-generator": {
"t": "Generator",
"d": "The model that reads the question and one passage and writes the answer, p<sub>θ</sub>(y|x, z). In RAG it is BART. For example, 0.9 for <q>Thursday 9am</q> with the queue log.",
"h": "05-rag-model-en.html#w-generator"
},
"05-rag-model-en.html#w-encdec": {
"t": "Encoder-decoder",
"d": "The encoder turns the input into vectors, and the decoder looks at them while it writes one token at a time. BART is such a model.",
"h": "05-rag-model-en.html#w-encdec"
},
"w-encdec": {
"t": "Encoder-decoder",
"d": "The encoder turns the input into vectors, and the decoder looks at them while it writes one token at a time. BART is such a model.",
"h": "05-rag-model-en.html#w-encdec"
},
"05-rag-model-en.html#w-concat": {
"t": "Concatenate",
"d": "Join two texts end to end into one text. For example, <q>question: …</q> followed by <q>passage: …</q>.",
"h": "05-rag-model-en.html#w-concat"
},
"w-concat": {
"t": "Concatenate",
"d": "Join two texts end to end into one text. For example, <q>question: …</q> followed by <q>passage: …</q>.",
"h": "05-rag-model-en.html#w-concat"
},
"05-rag-model-en.html#w-ragseq": {
"t": "RAG-Sequence",
"d": "The whole answer with each passage, then the weighted sum. For example, 0.6 × 0.18 + 0.4 × 0.45 = 0.288.",
"h": "05-rag-model-en.html#w-ragseq"
},
"w-ragseq": {
"t": "RAG-Sequence",
"d": "The whole answer with each passage, then the weighted sum. For example, 0.6 × 0.18 + 0.4 × 0.45 = 0.288.",
"h": "05-rag-model-en.html#w-ragseq"
},
"05-rag-model-en.html#w-ragtok": {
"t": "RAG-Token",
"d": "A weighted sum at every token, then the product of the tokens. For example, 0.74 × 0.48 = 0.355.",
"h": "05-rag-model-en.html#w-ragtok"
},
"w-ragtok": {
"t": "RAG-Token",
"d": "A weighted sum at every token, then the product of the tokens. For example, 0.74 × 0.48 = 0.355.",
"h": "05-rag-model-en.html#w-ragtok"
},
"05-rag-model-en.html#w-e2e": {
"t": "End-to-end training",
"d": "Training all the parts together with one loss. In RAG the query encoder and the generator both learn from the same −ln p(y|x). For example, −ln 0.70 = 0.357.",
"h": "05-rag-model-en.html#w-e2e"
},
"w-e2e": {
"t": "End-to-end training",
"d": "Training all the parts together with one loss. In RAG the query encoder and the generator both learn from the same −ln p(y|x). For example, −ln 0.70 = 0.357.",
"h": "05-rag-model-en.html#w-e2e"
},
"05-rag-model-en.html#w-backprop": {
"t": "Backpropagation",
"d": "Working backwards from the loss to get every parameter's gradient, backprop for short. In RAG it reaches the generator and the query encoder, but not the passage encoder.",
"h": "05-rag-model-en.html#w-backprop"
},
"w-backprop": {
"t": "Backpropagation",
"d": "Working backwards from the loss to get every parameter's gradient, backprop for short. In RAG it reaches the generator and the query encoder, but not the passage encoder.",
"h": "05-rag-model-en.html#w-backprop"
},
"05-rag-model-en.html#w-em": {
"t": "Exact Match",
"d": "An answer counts as right only if it matches the correct answer exactly. The score is the percentage of such questions. For example, RAG-Sequence's 44.5 on NQ.",
"h": "05-rag-model-en.html#w-em"
},
"w-em": {
"t": "Exact Match",
"d": "An answer counts as right only if it matches the correct answer exactly. The score is the percentage of such questions. For example, RAG-Sequence's 44.5 on NQ.",
"h": "05-rag-model-en.html#w-em"
},
"05-rag-model-en.html#w-closed": {
"t": "Closed book and open book",
"d": "Answering from parameters alone, or searching documents first and then answering. For example, on NQ the closed-book T5-11B scores 34.5 and the open-book RAG-Sequence 44.5.",
"h": "05-rag-model-en.html#w-closed"
},
"w-closed": {
"t": "Closed book and open book",
"d": "Answering from parameters alone, or searching documents first and then answering. For example, on NQ the closed-book T5-11B scores 34.5 and the open-book RAG-Sequence 44.5.",
"h": "05-rag-model-en.html#w-closed"
},
"05-rag-model-dense-en.html#w-posterior": {
"t": "Posterior and prior",
"d": "The prior p<sub>η</sub>(z|x) is a passage's weight before seeing the answer, and the posterior p(z|x, y) is its weight after, that passage's share of the total probability. For example, the queue log's prior is 0.602 and its posterior 0.773.",
"h": "05-rag-model-dense-en.html#w-posterior"
},
"w-posterior": {
"t": "Posterior and prior",
"d": "The prior p<sub>η</sub>(z|x) is a passage's weight before seeing the answer, and the posterior p(z|x, y) is its weight after, that passage's share of the total probability. For example, the queue log's prior is 0.602 and its posterior 0.773.",
"h": "05-rag-model-dense-en.html#w-posterior"
},
"05-rag-model-dense-en.html#w-ablation": {
"t": "Ablation",
"d": "Removing or freezing one part of a model and measuring again, to see what that part contributes. For example, freezing the query encoder in RAG-Sequence drops NQ (dev) from 44.0 to 41.2.",
"h": "05-rag-model-dense-en.html#w-ablation"
},
"w-ablation": {
"t": "Ablation",
"d": "Removing or freezing one part of a model and measuring again, to see what that part contributes. For example, freezing the query encoder in RAG-Sequence drops NQ (dev) from 44.0 to 41.2.",
"h": "05-rag-model-dense-en.html#w-ablation"
},
"05-rag-model-dense-en.html#w-thorough": {
"t": "Thorough and Fast decoding",
"d": "Two ways for RAG-Sequence to write an answer. Each passage produces one candidate. Thorough checks every candidate with every passage, Fast only with the passage that produced it. For example, with 50 passages on NQ, Thorough needs up to about 2,500 generator runs.",
"h": "05-rag-model-dense-en.html#w-thorough"
},
"w-thorough": {
"t": "Thorough and Fast decoding",
"d": "Two ways for RAG-Sequence to write an answer. Each passage produces one candidate. Thorough checks every candidate with every passage, Fast only with the passage that produced it. For example, with 50 passages on NQ, Thorough needs up to about 2,500 generator runs.",
"h": "05-rag-model-dense-en.html#w-thorough"
},
"05-rag-model-dense-en.html#w-collapse": {
"t": "Retrieval collapse",
"d": "The retriever starts bringing the same passages for every question during training, after which the generator learns to ignore them. For example, on the paper's story-writing task.",
"h": "05-rag-model-dense-en.html#w-collapse"
},
"w-collapse": {
"t": "Retrieval collapse",
"d": "The retriever starts bringing the same passages for every question during training, after which the generator learns to ignore them. For example, on the paper's story-writing task.",
"h": "05-rag-model-dense-en.html#w-collapse"
},
"06-rag-pipeline-en.html#w-frozen": {
"t": "Frozen LLM",
"d": "An LLM whose parameters you cannot change. You can only send it prompts. For example, GPT or Gemini used through an API.",
"h": "06-rag-pipeline-en.html#w-frozen"
},
"w-frozen": {
"t": "Frozen LLM",
"d": "An LLM whose parameters you cannot change. You can only send it prompts. For example, GPT or Gemini used through an API.",
"h": "06-rag-pipeline-en.html#w-frozen"
},
"06-rag-pipeline-en.html#w-pipeline": {
"t": "Pipeline",
"d": "A line of steps in which the output of each step is the input of the next. For example, Retrieve outputs the top-K passages, and those are the input of Read.",
"h": "06-rag-pipeline-en.html#w-pipeline"
},
"w-pipeline": {
"t": "Pipeline",
"d": "A line of steps in which the output of each step is the input of the next. For example, Retrieve outputs the top-K passages, and those are the input of Read.",
"h": "06-rag-pipeline-en.html#w-pipeline"
},
"06-rag-pipeline-en.html#w-naive": {
"t": "Naive RAG",
"d": "The simplest pipeline: an index, then Retrieve and Read for every query, with no extra step in between.",
"h": "06-rag-pipeline-en.html#w-naive"
},
"w-naive": {
"t": "Naive RAG",
"d": "The simplest pipeline: an index, then Retrieve and Read for every query, with no extra step in between.",
"h": "06-rag-pipeline-en.html#w-naive"
},
"06-rag-pipeline-en.html#w-indexing": {
"t": "Indexing time and query time",
"d": "Steps that run once, and steps that run for every query. For example, the embeddings of 60,000 passages are made once, and the query's embedding every time.",
"h": "06-rag-pipeline-en.html#w-indexing"
},
"w-indexing": {
"t": "Indexing time and query time",
"d": "Steps that run once, and steps that run for every query. For example, the embeddings of 60,000 passages are made once, and the query's embedding every time.",
"h": "06-rag-pipeline-en.html#w-indexing"
},
"06-rag-pipeline-en.html#w-pre": {
"t": "Pre-retrieval",
"d": "Steps that improve the query before retrieval: routing, rewriting and expansion.",
"h": "06-rag-pipeline-en.html#w-pre"
},
"w-pre": {
"t": "Pre-retrieval",
"d": "Steps that improve the query before retrieval: routing, rewriting and expansion.",
"h": "06-rag-pipeline-en.html#w-pre"
},
"06-rag-pipeline-en.html#w-routing": {
"t": "Query routing",
"d": "Deciding which index or source to search. For example, “when is the project milestone due” goes to the syllabus index.",
"h": "06-rag-pipeline-en.html#w-routing"
},
"w-routing": {
"t": "Query routing",
"d": "Deciding which index or source to search. For example, “when is the project milestone due” goes to the syllabus index.",
"h": "06-rag-pipeline-en.html#w-routing"
},
"06-rag-pipeline-en.html#w-rewriting": {
"t": "Query rewriting",
"d": "Having an LLM turn the query into a clean search query. For example, “OH timings?” becomes “CS 329Z office hours schedule”.",
"h": "06-rag-pipeline-en.html#w-rewriting"
},
"w-rewriting": {
"t": "Query rewriting",
"d": "Having an LLM turn the query into a clean search query. For example, “OH timings?” becomes “CS 329Z office hours schedule”.",
"h": "06-rag-pipeline-en.html#w-rewriting"
},
"06-rag-pipeline-en.html#w-expansion": {
"t": "Query expansion",
"d": "Adding related words or other forms to the query. For example, adding “office hours” to “help ta” raises the office hours page from 0 to 2.",
"h": "06-rag-pipeline-en.html#w-expansion"
},
"w-expansion": {
"t": "Query expansion",
"d": "Adding related words or other forms to the query. For example, adding “office hours” to “help ta” raises the office hours page from 0 to 2.",
"h": "06-rag-pipeline-en.html#w-expansion"
},
"06-rag-pipeline-en.html#w-post": {
"t": "Post-retrieval",
"d": "Steps that improve the returned list after retrieval: rerank, summary and fusion.",
"h": "06-rag-pipeline-en.html#w-post"
},
"w-post": {
"t": "Post-retrieval",
"d": "Steps that improve the returned list after retrieval: rerank, summary and fusion.",
"h": "06-rag-pipeline-en.html#w-post"
},
"06-rag-pipeline-en.html#w-rerank": {
"t": "Rerank and reranker",
"d": "A slower but more accurate model that sorts the returned passages again. For example, it puts the forum post below the queue log when both tie at 2.",
"h": "06-rag-pipeline-en.html#w-rerank"
},
"w-rerank": {
"t": "Rerank and reranker",
"d": "A slower but more accurate model that sorts the returned passages again. For example, it puts the forum post below the queue log when both tie at 2.",
"h": "06-rag-pipeline-en.html#w-rerank"
},
"06-rag-pipeline-en.html#w-summary": {
"t": "Summary",
"d": "Shortening passages before the prompt. For example, if a 500-token passage becomes 100 tokens, 14 passages take 1,400 tokens instead of 7,000. The risk: a detail such as Room 104 can drop out.",
"h": "06-rag-pipeline-en.html#w-summary"
},
"w-summary": {
"t": "Summary",
"d": "Shortening passages before the prompt. For example, if a 500-token passage becomes 100 tokens, 14 passages take 1,400 tokens instead of 7,000. The risk: a detail such as Room 104 can drop out.",
"h": "06-rag-pipeline-en.html#w-summary"
},
"06-rag-pipeline-en.html#w-fusion": {
"t": "Fusion",
"d": "Merging several ranked lists into one. For example, one list is queue log, forum post, office hours page, and another is office hours page, queue log. The passages that appear in both rise to the top.",
"h": "06-rag-pipeline-en.html#w-fusion"
},
"w-fusion": {
"t": "Fusion",
"d": "Merging several ranked lists into one. For example, one list is queue log, forum post, office hours page, and another is office hours page, queue log. The passages that appear in both rise to the top.",
"h": "06-rag-pipeline-en.html#w-fusion"
},
"06-rag-pipeline-en.html#w-advanced": {
"t": "Advanced RAG",
"d": "The pipeline you get by adding pre-retrieval and post-retrieval steps to Naive RAG. For example, Rewrite, Retrieve, Rerank, Read.",
"h": "06-rag-pipeline-en.html#w-advanced"
},
"w-advanced": {
"t": "Advanced RAG",
"d": "The pipeline you get by adding pre-retrieval and post-retrieval steps to Naive RAG. For example, Rewrite, Retrieve, Rerank, Read.",
"h": "06-rag-pipeline-en.html#w-advanced"
},
"06-rag-pipeline-en.html#w-modular": {
"t": "Modular RAG",
"d": "Splitting the pipeline into modules and connecting them in different orders. For example, Retrieve, Read, Retrieve, Read.",
"h": "06-rag-pipeline-en.html#w-modular"
},
"w-modular": {
"t": "Modular RAG",
"d": "Splitting the pipeline into modules and connecting them in different orders. For example, Retrieve, Read, Retrieve, Read.",
"h": "06-rag-pipeline-en.html#w-modular"
},
"06-rag-pipeline-en.html#w-pattern": {
"t": "Pattern",
"d": "A fixed order of modules, such as Retrieve, Read.",
"h": "06-rag-pipeline-en.html#w-pattern"
},
"w-pattern": {
"t": "Pattern",
"d": "A fixed order of modules, such as Retrieve, Read.",
"h": "06-rag-pipeline-en.html#w-pattern"
},
"06-rag-pipeline-en.html#w-demos": {
"t": "Demonstrations (few-shot)",
"d": "Worked examples placed in the prompt before the question. For example, “Q: When is the milestone due? A: Week 6, Thursday [P1]”.",
"h": "06-rag-pipeline-en.html#w-demos"
},
"w-demos": {
"t": "Demonstrations (few-shot)",
"d": "Worked examples placed in the prompt before the question. For example, “Q: When is the milestone due? A: Week 6, Thursday [P1]”.",
"h": "06-rag-pipeline-en.html#w-demos"
},
"06-rag-pipeline-en.html#w-multihop": {
"t": "Multi-hop question",
"d": "A question that needs several searches, because the parts of the answer sit in different passages. For example, where the least crowded office hour is: first the queue log, then the office hours page.",
"h": "06-rag-pipeline-en.html#w-multihop"
},
"w-multihop": {
"t": "Multi-hop question",
"d": "A question that needs several searches, because the parts of the answer sit in different passages. For example, where the least crowded office hour is: first the queue log, then the office hours page.",
"h": "06-rag-pipeline-en.html#w-multihop"
},
"06-rag-pipeline-dense-en.html#w-precision": {
"t": "Precision",
"d": "The share of the returned passages that are right. For example, at K = 2 the queue log is right and the forum post is wrong, so precision = 1 ÷ 2 = 0.5.",
"h": "06-rag-pipeline-dense-en.html#w-precision"
},
"w-precision": {
"t": "Precision",
"d": "The share of the returned passages that are right. For example, at K = 2 the queue log is right and the forum post is wrong, so precision = 1 ÷ 2 = 0.5.",
"h": "06-rag-pipeline-dense-en.html#w-precision"
},
"06-rag-pipeline-dense-en.html#w-relgain": {
"t": "Relative gain",
"d": "The difference divided by the old number, written as a percentage. For example, (51.4 − 36.9) ÷ 36.9 = 0.393, about 39%. The plain difference, 14.5, is in percentage points.",
"h": "06-rag-pipeline-dense-en.html#w-relgain"
},
"w-relgain": {
"t": "Relative gain",
"d": "The difference divided by the old number, written as a percentage. For example, (51.4 − 36.9) ÷ 36.9 = 0.393, about 39%. The plain difference, 14.5, is in percentage points.",
"h": "06-rag-pipeline-dense-en.html#w-relgain"
},
"06-rag-pipeline-dense-en.html#w-dsp": {
"t": "DSP",
"d": "Demonstrate–Search–Predict: a program that passes text between a frozen LM and a frozen retriever, and builds its own demonstrations. Built at Stanford by Khattab and colleagues in 2022. For example, Exact Match 51.4 on HotPotQA.",
"h": "06-rag-pipeline-dense-en.html#w-dsp"
},
"w-dsp": {
"t": "DSP",
"d": "Demonstrate–Search–Predict: a program that passes text between a frozen LM and a frozen retriever, and builds its own demonstrations. Built at Stanford by Khattab and colleagues in 2022. For example, Exact Match 51.4 on HotPotQA.",
"h": "06-rag-pipeline-dense-en.html#w-dsp"
},
"06-rag-pipeline-dense-en.html#w-iterretgen": {
"t": "ITER-RETGEN",
"d": "Retrieval and generation in turns, where the previous answer joined to the question becomes the next query. Built by Shao and colleagues in 2023. For example, adding Thursday 9am lifts the office hours page from 1 to 3.",
"h": "06-rag-pipeline-dense-en.html#w-iterretgen"
},
"w-iterretgen": {
"t": "ITER-RETGEN",
"d": "Retrieval and generation in turns, where the previous answer joined to the question becomes the next query. Built by Shao and colleagues in 2023. For example, adding Thursday 9am lifts the office hours page from 1 to 3.",
"h": "06-rag-pipeline-dense-en.html#w-iterretgen"
},
"06-rag-pipeline-dense-en.html#w-iterative": {
"t": "Iterative, recursive and adaptive retrieval",
"d": "Three ways to search more than once: in turns for a fixed count, by breaking the question into smaller ones, and by letting the model decide. For example, ITER-RETGEN is iterative, and the Search-R1 trace is adaptive.",
"h": "06-rag-pipeline-dense-en.html#w-iterative"
},
"w-iterative": {
"t": "Iterative, recursive and adaptive retrieval",
"d": "Three ways to search more than once: in turns for a fixed count, by breaking the question into smaller ones, and by letting the model decide. For example, ITER-RETGEN is iterative, and the Search-R1 trace is adaptive.",
"h": "06-rag-pipeline-dense-en.html#w-iterative"
},
"07-chunking-en.html#w-wordtype": {
"t": "Word type and token in context",
"d": "A word as listed in the dictionary, and one use of it in a sentence. For example, late is a word type, and its use in <q>Late days may not be applied</q> is a token in context.",
"h": "07-chunking-en.html#w-wordtype"
},
"w-wordtype": {
"t": "Word type and token in context",
"d": "A word as listed in the dictionary, and one use of it in a sentence. For example, late is a word type, and its use in <q>Late days may not be applied</q> is a token in context.",
"h": "07-chunking-en.html#w-wordtype"
},
"07-chunking-en.html#w-static": {
"t": "Static word embedding",
"d": "One vector per word type, whatever the context. For example, word2vec and GloVe. The vector for late stays [0.5, 0.5] in both sentences. <span class=\"mine\">my numbers</span>",
"h": "07-chunking-en.html#w-static"
},
"w-static": {
"t": "Static word embedding",
"d": "One vector per word type, whatever the context. For example, word2vec and GloVe. The vector for late stays [0.5, 0.5] in both sentences. <span class=\"mine\">my numbers</span>",
"h": "07-chunking-en.html#w-static"
},
"07-chunking-en.html#w-contextual": {
"t": "Contextual embedding",
"d": "A separate vector for each token, shaped by its sentence. For example, BERT. In <q>Late days may not be applied</q> late is [0.1, 0.9], and in <q>late afternoon office hours</q> it is [0.9, 0.1]. <span class=\"mine\">my numbers</span>",
"h": "07-chunking-en.html#w-contextual"
},
"w-contextual": {
"t": "Contextual embedding",
"d": "A separate vector for each token, shaped by its sentence. For example, BERT. In <q>Late days may not be applied</q> late is [0.1, 0.9], and in <q>late afternoon office hours</q> it is [0.9, 0.1]. <span class=\"mine\">my numbers</span>",
"h": "07-chunking-en.html#w-contextual"
},
"07-chunking-en.html#w-passageemb": {
"t": "Passage embedding",
"d": "One vector for a whole chunk, the kind the retrieval index stores. For example, the vectors from Sentence-BERT, DPR and E5.",
"h": "07-chunking-en.html#w-passageemb"
},
"w-passageemb": {
"t": "Passage embedding",
"d": "One vector for a whole chunk, the kind the retrieval index stores. For example, the vectors from Sentence-BERT, DPR and E5.",
"h": "07-chunking-en.html#w-passageemb"
},
"07-chunking-en.html#w-multimodal": {
"t": "Multimodal embedding",
"d": "Vectors for text and for images in the same space. For example, CLIP. A photo of office hours written on a whiteboard and the text <q>office hours schedule</q> can get nearby vectors.",
"h": "07-chunking-en.html#w-multimodal"
},
"w-multimodal": {
"t": "Multimodal embedding",
"d": "Vectors for text and for images in the same space. For example, CLIP. A photo of office hours written on a whiteboard and the text <q>office hours schedule</q> can get nearby vectors.",
"h": "07-chunking-en.html#w-multimodal"
},
"07-chunking-en.html#w-graphemb": {
"t": "Graph embedding",
"d": "A vector for a node or a relation in a network. For example, node2vec. In a course graph: the TA, office hours, and the runs relation between them.",
"h": "07-chunking-en.html#w-graphemb"
},
"w-graphemb": {
"t": "Graph embedding",
"d": "A vector for a node or a relation in a network. For example, node2vec. In a course graph: the TA, office hours, and the runs relation between them.",
"h": "07-chunking-en.html#w-graphemb"
},
"07-chunking-en.html#w-pooling": {
"t": "Mean pooling",
"d": "Making one vector by averaging several token vectors. For example, the average of [0.9, 0.1], [0.7, 0.3] and [0.8, 0.2] is [0.8, 0.2].",
"h": "07-chunking-en.html#w-pooling"
},
"w-pooling": {
"t": "Mean pooling",
"d": "Making one vector by averaging several token vectors. For example, the average of [0.9, 0.1], [0.7, 0.3] and [0.8, 0.2] is [0.8, 0.2].",
"h": "07-chunking-en.html#w-pooling"
},
"07-chunking-en.html#w-chunk": {
"t": "Chunk",
"d": "A piece of a document made for retrieval, and the basic unit of retrieval. For example, the Grading part of the 40-page syllabus.",
"h": "07-chunking-en.html#w-chunk"
},
"w-chunk": {
"t": "Chunk",
"d": "A piece of a document made for retrieval, and the basic unit of retrieval. For example, the Grading part of the 40-page syllabus.",
"h": "07-chunking-en.html#w-chunk"
},
"07-chunking-en.html#w-fixed": {
"t": "Fixed-size chunking",
"d": "Cutting at a fixed number of tokens, even if a fact breaks in the middle. For example, every 50 tokens.",
"h": "07-chunking-en.html#w-fixed"
},
"w-fixed": {
"t": "Fixed-size chunking",
"d": "Cutting at a fixed number of tokens, even if a fact breaks in the middle. For example, every 50 tokens.",
"h": "07-chunking-en.html#w-fixed"
},
"07-chunking-en.html#w-chunkoverlap": {
"t": "Overlap",
"d": "A new chunk starts by repeating the last few tokens of the previous one. To keep a fact of L tokens whole, it must be at least L − 1. For example, 6 for a 7-word date.",
"h": "07-chunking-en.html#w-chunkoverlap"
},
"w-chunkoverlap": {
"t": "Overlap",
"d": "A new chunk starts by repeating the last few tokens of the previous one. To keep a fact of L tokens whole, it must be at least L − 1. For example, 6 for a 7-word date.",
"h": "07-chunking-en.html#w-chunkoverlap"
},
"07-chunking-en.html#w-stride": {
"t": "Stride",
"d": "The distance between the starts of two neighbouring chunks: chunk size − overlap. For example, 9 − 6 = 3.",
"h": "07-chunking-en.html#w-stride"
},
"w-stride": {
"t": "Stride",
"d": "The distance between the starts of two neighbouring chunks: chunk size − overlap. For example, 9 − 6 = 3.",
"h": "07-chunking-en.html#w-stride"
},
"07-chunking-en.html#w-semantic": {
"t": "Semantic chunking",
"d": "Cutting at logical boundaries such as sentences or sections. For example, cutting the syllabus at its Grading, Office hours and Project headings.",
"h": "07-chunking-en.html#w-semantic"
},
"w-semantic": {
"t": "Semantic chunking",
"d": "Cutting at logical boundaries such as sentences or sections. For example, cutting the syllabus at its Grading, Office hours and Project headings.",
"h": "07-chunking-en.html#w-semantic"
},
"07-chunking-en.html#w-enriched": {
"t": "Context-enriched chunking",
"d": "Storing metadata or a summary with every chunk. For example, <q>Source: CS 329Z syllabus, section: Grading</q> above every chunk.",
"h": "07-chunking-en.html#w-enriched"
},
"w-enriched": {
"t": "Context-enriched chunking",
"d": "Storing metadata or a summary with every chunk. For example, <q>Source: CS 329Z syllabus, section: Grading</q> above every chunk.",
"h": "07-chunking-en.html#w-enriched"
},
"07-chunking-en.html#w-metadata": {
"t": "Metadata",
"d": "Data about data: name, section, date. For example, <q>CS 329Z syllabus, Grading, 30 Sep 2026</q>.",
"h": "07-chunking-en.html#w-metadata"
},
"w-metadata": {
"t": "Metadata",
"d": "Data about data: name, section, date. For example, <q>CS 329Z syllabus, Grading, 30 Sep 2026</q>.",
"h": "07-chunking-en.html#w-metadata"
},
"07-chunking-en.html#w-aichunk": {
"t": "AI-driven dynamic chunking",
"d": "Asking an LLM where the topic changes in a text, and cutting there. It needs LLM calls for every document.",
"h": "07-chunking-en.html#w-aichunk"
},
"w-aichunk": {
"t": "AI-driven dynamic chunking",
"d": "Asking an LLM where the topic changes in a text, and cutting there. It needs LLM calls for every document.",
"h": "07-chunking-en.html#w-aichunk"
},
"07-chunking-dense-en.html#w-recursive": {
"t": "Recursive chunking",
"d": "Cutting along a ladder of separators: paragraph first, then line, then sentence, then space. Only a piece still larger than the chunk size gets cut at the next separator. For example, at size 20 the Grading section becomes two chunks of 19 and 7 words.",
"h": "07-chunking-dense-en.html#w-recursive"
},
"w-recursive": {
"t": "Recursive chunking",
"d": "Cutting along a ladder of separators: paragraph first, then line, then sentence, then space. Only a piece still larger than the chunk size gets cut at the next separator. For example, at size 20 the Grading section becomes two chunks of 19 and 7 words.",
"h": "07-chunking-dense-en.html#w-recursive"
},
"07-chunking-dense-en.html#w-ceil": {
"t": "⌈x⌉ (ceiling)",
"d": "The smallest whole number that is x or larger. For example, ⌈23.75⌉ = 24, and chunks = ⌈(1,000 − 50) ÷ 40⌉ + 1 = 25.",
"h": "07-chunking-dense-en.html#w-ceil"
},
"w-ceil": {
"t": "⌈x⌉ (ceiling)",
"d": "The smallest whole number that is x or larger. For example, ⌈23.75⌉ = 24, and chunks = ⌈(1,000 − 50) ÷ 40⌉ + 1 = 25.",
"h": "07-chunking-dense-en.html#w-ceil"
},
"08-contextual-retrieval-en.html#w-contextloss": {
"t": "Context loss",
"d": "After cutting, a chunk can no longer say which document or topic it belongs to. For example, <q>The company’s revenue grew by 3%</q> does not name the company.",
"h": "08-contextual-retrieval-en.html#w-contextloss"
},
"w-contextloss": {
"t": "Context loss",
"d": "After cutting, a chunk can no longer say which document or topic it belongs to. For example, <q>The company’s revenue grew by 3%</q> does not name the company.",
"h": "08-contextual-retrieval-en.html#w-contextloss"
},
"08-contextual-retrieval-en.html#w-ctxretrieval": {
"t": "Contextual retrieval",
"d": "Indexing each chunk with a 50–100 token context, written by an LLM, placed in front of it. For example, adding <q>From ACME Corp’s Q2 2023 SEC filing</q>.",
"h": "08-contextual-retrieval-en.html#w-ctxretrieval"
},
"w-ctxretrieval": {
"t": "Contextual retrieval",
"d": "Indexing each chunk with a 50–100 token context, written by an LLM, placed in front of it. For example, adding <q>From ACME Corp’s Q2 2023 SEC filing</q>.",
"h": "08-contextual-retrieval-en.html#w-ctxretrieval"
},
"08-contextual-retrieval-en.html#w-failed20": {
"t": "Failed retrievals@20",
"d": "When each query has one right chunk, the percentage of queries whose right chunk is not in the top 20. Smaller is better. For example, 29 failures in 1,000 queries is 2.9%.",
"h": "08-contextual-retrieval-en.html#w-failed20"
},
"w-failed20": {
"t": "Failed retrievals@20",
"d": "When each query has one right chunk, the percentage of queries whose right chunk is not in the top 20. Smaller is better. For example, 29 failures in 1,000 queries is 2.9%.",
"h": "08-contextual-retrieval-en.html#w-failed20"
},
"08-contextual-retrieval-en.html#w-naivechunk": {
"t": "Naive chunking",
"d": "Cutting first, then encoding each chunk on its own. Then the vector of <q>It is due Week 6</q> stays at [0.5, 0.5].",
"h": "08-contextual-retrieval-en.html#w-naivechunk"
},
"w-naivechunk": {
"t": "Naive chunking",
"d": "Cutting first, then encoding each chunk on its own. Then the vector of <q>It is due Week 6</q> stays at [0.5, 0.5].",
"h": "08-contextual-retrieval-en.html#w-naivechunk"
},
"08-contextual-retrieval-en.html#w-latechunk": {
"t": "Late chunking",
"d": "Encoding the whole document first, then mean pooling each chunk’s token vectors. Then the vector of <q>It is due Week 6</q> becomes [0.9, 0.1].",
"h": "08-contextual-retrieval-en.html#w-latechunk"
},
"w-latechunk": {
"t": "Late chunking",
"d": "Encoding the whole document first, then mean pooling each chunk’s token vectors. Then the vector of <q>It is due Week 6</q> becomes [0.9, 0.1].",
"h": "08-contextual-retrieval-en.html#w-latechunk"
},
"08-contextual-retrieval-en.html#w-longctx": {
"t": "Long-context encoder",
"d": "An encoder that can read a very long text in one go. For example, 8,192 tokens, about 10 pages.",
"h": "08-contextual-retrieval-en.html#w-longctx"
},
"w-longctx": {
"t": "Long-context encoder",
"d": "An encoder that can read a very long text in one go. For example, 8,192 tokens, about 10 pages.",
"h": "08-contextual-retrieval-en.html#w-longctx"
},
"08-contextual-retrieval-dense-en.html#w-promptcache": {
"t": "Prompt caching",
"d": "The LLM service keeps a repeated part of the prompt after the first call, such as the whole document, so that part is cheap in later calls. According to the blog, contextual retrieval then costs $1.02 per million document tokens.",
"h": "08-contextual-retrieval-dense-en.html#w-promptcache"
},
"w-promptcache": {
"t": "Prompt caching",
"d": "The LLM service keeps a repeated part of the prompt after the first call, such as the whole document, so that part is cheap in later calls. According to the blog, contextual retrieval then costs $1.02 per million document tokens.",
"h": "08-contextual-retrieval-dense-en.html#w-promptcache"
},
"08-contextual-retrieval-dense-en.html#w-iid": {
"t": "i.i.d. and conditional embeddings",
"d": "i.i.d.: each chunk’s vector is built completely separately from the other chunks, as in naive chunking. Conditional: each chunk’s vector is built with the whole document in view, as in late chunking, where <q>It</q> gets [0.9, 0.1].",
"h": "08-contextual-retrieval-dense-en.html#w-iid"
},
"w-iid": {
"t": "i.i.d. and conditional embeddings",
"d": "i.i.d.: each chunk’s vector is built completely separately from the other chunks, as in naive chunking. Conditional: each chunk’s vector is built with the whole document in view, as in late chunking, where <q>It</q> gets [0.9, 0.1].",
"h": "08-contextual-retrieval-dense-en.html#w-iid"
},
"08-contextual-retrieval-dense-en.html#w-longlate": {
"t": "Long late chunking",
"d": "Late chunking for a document longer than the encoder’s limit, read in large overlapping windows. For example, 20,000 tokens read in windows of 8,192 tokens, each new window starting 1,000 tokens back.",
"h": "08-contextual-retrieval-dense-en.html#w-longlate"
},
"w-longlate": {
"t": "Long late chunking",
"d": "Late chunking for a document longer than the encoder’s limit, read in large overlapping windows. For example, 20,000 tokens read in windows of 8,192 tokens, each new window starting 1,000 tokens back.",
"h": "08-contextual-retrieval-dense-en.html#w-longlate"
},
"09-raptor-graphrag-en.html#w-detailq": {
"t": "Detail question and thematic question",
"d": "The answer is written in one place, or it is built from several passages. For example, “When is the milestone due?” and “What are all the deadlines?”.",
"h": "09-raptor-graphrag-en.html#w-detailq"
},
"w-detailq": {
"t": "Detail question and thematic question",
"d": "The answer is written in one place, or it is built from several passages. For example, “When is the milestone due?” and “What are all the deadlines?”.",
"h": "09-raptor-graphrag-en.html#w-detailq"
},
"09-raptor-graphrag-en.html#w-clustering": {
"t": "Clustering",
"d": "Splitting vectors into groups so that the vectors in a group are close to each other. For example, the syllabus [0.1, 0.9] and the project page [0.2, 0.8] have cosine 0.99, so they share a group.",
"h": "09-raptor-graphrag-en.html#w-clustering"
},
"w-clustering": {
"t": "Clustering",
"d": "Splitting vectors into groups so that the vectors in a group are close to each other. For example, the syllabus [0.1, 0.9] and the project page [0.2, 0.8] have cosine 0.99, so they share a group.",
"h": "09-raptor-graphrag-en.html#w-clustering"
},
"09-raptor-graphrag-en.html#w-cluster": {
"t": "Cluster and centroid",
"d": "A cluster is a group, and its centroid is the average of its vectors. For example, the centroid of [0.1, 0.9], [0.2, 0.8] and [0.15, 0.85] is [0.15, 0.85].",
"h": "09-raptor-graphrag-en.html#w-cluster"
},
"w-cluster": {
"t": "Cluster and centroid",
"d": "A cluster is a group, and its centroid is the average of its vectors. For example, the centroid of [0.1, 0.9], [0.2, 0.8] and [0.15, 0.85] is [0.15, 0.85].",
"h": "09-raptor-graphrag-en.html#w-cluster"
},
"09-raptor-graphrag-en.html#w-softclust": {
"t": "Soft clustering",
"d": "Putting one passage into more than one cluster. For example, the FAQ page, whose cosine is high with both centroids (0.86 and 0.78).",
"h": "09-raptor-graphrag-en.html#w-softclust"
},
"w-softclust": {
"t": "Soft clustering",
"d": "Putting one passage into more than one cluster. For example, the FAQ page, whose cosine is high with both centroids (0.86 and 0.78).",
"h": "09-raptor-graphrag-en.html#w-softclust"
},
"09-raptor-graphrag-en.html#w-raptor": {
"t": "RAPTOR",
"d": "Building a tree bottom up from summaries of clusters, and searching every level. For example, the all-deadlines question matches summary A.",
"h": "09-raptor-graphrag-en.html#w-raptor"
},
"w-raptor": {
"t": "RAPTOR",
"d": "Building a tree bottom up from summaries of clusters, and searching every level. For example, the all-deadlines question matches summary A.",
"h": "09-raptor-graphrag-en.html#w-raptor"
},
"09-raptor-graphrag-en.html#w-tree": {
"t": "Tree, node, leaf, root",
"d": "A structure with levels: a node is a box, a leaf is a node at the bottom, and the root is the node at the top. For example, 2 summaries above 6 chunks (the leaves), and 1 root above them.",
"h": "09-raptor-graphrag-en.html#w-tree"
},
"w-tree": {
"t": "Tree, node, leaf, root",
"d": "A structure with levels: a node is a box, a leaf is a node at the bottom, and the root is the node at the top. For example, 2 summaries above 6 chunks (the leaves), and 1 root above them.",
"h": "09-raptor-graphrag-en.html#w-tree"
},
"09-raptor-graphrag-en.html#w-entity": {
"t": "Entity",
"d": "Any named thing: a person, a place, a course, a document or a date. For example, Week 6, TAs, Room 104.",
"h": "09-raptor-graphrag-en.html#w-entity"
},
"w-entity": {
"t": "Entity",
"d": "Any named thing: a person, a place, a course, a document or a date. For example, Week 6, TAs, Room 104.",
"h": "09-raptor-graphrag-en.html#w-entity"
},
"09-raptor-graphrag-en.html#w-relation": {
"t": "Relation",
"d": "A link between two entities. For example, (Project milestone, due, Week 6).",
"h": "09-raptor-graphrag-en.html#w-relation"
},
"w-relation": {
"t": "Relation",
"d": "A link between two entities. For example, (Project milestone, due, Week 6).",
"h": "09-raptor-graphrag-en.html#w-relation"
},
"09-raptor-graphrag-en.html#w-kg": {
"t": "Knowledge graph and edge",
"d": "A network of entities (nodes) and relations (edges). For example, an edge labelled “due” between the milestone and Week 6.",
"h": "09-raptor-graphrag-en.html#w-kg"
},
"w-kg": {
"t": "Knowledge graph and edge",
"d": "A network of entities (nodes) and relations (edges). For example, an edge labelled “due” between the milestone and Week 6.",
"h": "09-raptor-graphrag-en.html#w-kg"
},
"09-raptor-graphrag-en.html#w-community": {
"t": "Community",
"d": "A tightly linked part of a graph. For example, Office hours, TAs, Room 104 and Zoom.",
"h": "09-raptor-graphrag-en.html#w-community"
},
"w-community": {
"t": "Community",
"d": "A tightly linked part of a graph. For example, Office hours, TAs, Room 104 and Zoom.",
"h": "09-raptor-graphrag-en.html#w-community"
},
"09-raptor-graphrag-en.html#w-graphrag": {
"t": "GraphRAG",
"d": "Answering global questions from a knowledge graph, its communities and their summaries. For example, the all-deadlines answer, built from the Project and Homework 1 communities.",
"h": "09-raptor-graphrag-en.html#w-graphrag"
},
"w-graphrag": {
"t": "GraphRAG",
"d": "Answering global questions from a knowledge graph, its communities and their summaries. For example, the all-deadlines answer, built from the Project and Homework 1 communities.",
"h": "09-raptor-graphrag-en.html#w-graphrag"
},
"09-raptor-graphrag-en.html#w-qfs": {
"t": "Query-focused summarization",
"d": "Writing a summary with the question in mind. For example, asking for “all the deadlines” makes the Project community's summary give only the dates.",
"h": "09-raptor-graphrag-en.html#w-qfs"
},
"w-qfs": {
"t": "Query-focused summarization",
"d": "Writing a summary with the question in mind. For example, asking for “all the deadlines” makes the Project community's summary give only the dates.",
"h": "09-raptor-graphrag-en.html#w-qfs"
},
"09-raptor-graphrag-dense-en.html#w-gmm": {
"t": "Gaussian mixture model (GMM)",
"d": "A weighted sum of bell curves: P(x) = ∑ π<sub>k</sub> 𝒩<sub>k</sub>(x). It gives every passage a membership for every cluster. For example, [0.6, 0.4] gets 0.904 for office hours and 0.096 for deadlines.",
"h": "09-raptor-graphrag-dense-en.html#w-gmm"
},
"w-gmm": {
"t": "Gaussian mixture model (GMM)",
"d": "A weighted sum of bell curves: P(x) = ∑ π<sub>k</sub> 𝒩<sub>k</sub>(x). It gives every passage a membership for every cluster. For example, [0.6, 0.4] gets 0.904 for office hours and 0.096 for deadlines.",
"h": "09-raptor-graphrag-dense-en.html#w-gmm"
},
"09-raptor-graphrag-dense-en.html#w-bic": {
"t": "BIC",
"d": "ln(N) · k − 2 ln(L̂): choosing the number of clusters by weighing the fit's likelihood against its parameter count, where the smallest BIC wins. For example, on 6 passages K = 2 gives −23.64 and K = 3 gives −20.11.",
"h": "09-raptor-graphrag-dense-en.html#w-bic"
},
"w-bic": {
"t": "BIC",
"d": "ln(N) · k − 2 ln(L̂): choosing the number of clusters by weighing the fit's likelihood against its parameter count, where the smallest BIC wins. For example, on 6 passages K = 2 gives −23.64 and K = 3 gives −20.11.",
"h": "09-raptor-graphrag-dense-en.html#w-bic"
},
"09-raptor-graphrag-dense-en.html#w-umap": {
"t": "UMAP",
"d": "Turning vectors into ones with fewer numbers while keeping nearby points nearby. For example, RAPTOR's code makes every vector 10 numbers long.",
"h": "09-raptor-graphrag-dense-en.html#w-umap"
},
"w-umap": {
"t": "UMAP",
"d": "Turning vectors into ones with fewer numbers while keeping nearby points nearby. For example, RAPTOR's code makes every vector 10 numbers long.",
"h": "09-raptor-graphrag-dense-en.html#w-umap"
},
"09-raptor-graphrag-dense-en.html#w-collapsed": {
"t": "Tree traversal and collapsed tree",
"d": "Picking the top k on each level from the top down, or sorting all nodes in one list and taking them up to a token limit. For example, for the all-deadlines question the collapsed tree takes 5 nodes within 100 tokens, A first.",
"h": "09-raptor-graphrag-dense-en.html#w-collapsed"
},
"w-collapsed": {
"t": "Tree traversal and collapsed tree",
"d": "Picking the top k on each level from the top down, or sorting all nodes in one list and taking them up to a token limit. For example, for the all-deadlines question the collapsed tree takes 5 nodes within 100 tokens, A first.",
"h": "09-raptor-graphrag-dense-en.html#w-collapsed"
},
"09-raptor-graphrag-dense-en.html#w-f1": {
"t": "F1",
"d": "A score that combines precision and recall, 2PR ÷ (P + R). For example, P = 0.75 and R = 0.6 give F1 = 0.667.",
"h": "09-raptor-graphrag-dense-en.html#w-f1"
},
"w-f1": {
"t": "F1",
"d": "A score that combines precision and recall, 2PR ÷ (P + R). For example, P = 0.75 and R = 0.6 give F1 = 0.667.",
"h": "09-raptor-graphrag-dense-en.html#w-f1"
},
"09-raptor-graphrag-dense-en.html#w-leiden": {
"t": "Leiden and degree",
"d": "Leiden splits a graph into communities with many edges inside. A node's degree is its number of edges. For example, Project has degree 3.",
"h": "09-raptor-graphrag-dense-en.html#w-leiden"
},
"w-leiden": {
"t": "Leiden and degree",
"d": "Leiden splits a graph into communities with many edges inside. A node's degree is its number of edges. For example, Project has degree 3.",
"h": "09-raptor-graphrag-dense-en.html#w-leiden"
},
"09-raptor-graphrag-dense-en.html#w-mapreduce": {
"t": "Map-reduce",
"d": "Doing the same job on each piece separately (map), then combining the results (reduce). For example, a partial answer and a score from each community, then a final answer in score order.",
"h": "09-raptor-graphrag-dense-en.html#w-mapreduce"
},
"w-mapreduce": {
"t": "Map-reduce",
"d": "Doing the same job on each piece separately (map), then combining the results (reduce). For example, a partial answer and a score from each community, then a final answer in score order.",
"h": "09-raptor-graphrag-dense-en.html#w-mapreduce"
},
"09-raptor-graphrag-dense-en.html#w-winrate": {
"t": "Win rate",
"d": "The percentage of judgments that favour one of two systems, where 50% means a tie. For example, about 450 of 625 judgments, or 72%.",
"h": "09-raptor-graphrag-dense-en.html#w-winrate"
},
"w-winrate": {
"t": "Win rate",
"d": "The percentage of judgments that favour one of two systems, where 50% means a tie. For example, about 450 of 625 judgments, or 72%.",
"h": "09-raptor-graphrag-dense-en.html#w-winrate"
},
"10-vector-search-en.html#w-exact": {
"t": "Exact search (brute force)",
"d": "Comparing with every vector to get the guaranteed top-k. For example, with 21 vectors, computing 21 distances.",
"h": "10-vector-search-en.html#w-exact"
},
"w-exact": {
"t": "Exact search (brute force)",
"d": "Comparing with every vector to get the guaranteed top-k. For example, with 21 vectors, computing 21 distances.",
"h": "10-vector-search-en.html#w-exact"
},
"10-vector-search-en.html#w-bigo": {
"t": "Big-O, O(N·d)",
"d": "How the cost grows as N or d grows. For example, in O(N·d), if N doubles, the cost doubles too.",
"h": "10-vector-search-en.html#w-bigo"
},
"w-bigo": {
"t": "Big-O, O(N·d)",
"d": "How the cost grows as N or d grows. For example, in O(N·d), if N doubles, the cost doubles too.",
"h": "10-vector-search-en.html#w-bigo"
},
"10-vector-search-en.html#w-nn": {
"t": "Nearest neighbors",
"d": "The vectors nearest to the query. For example, among the neighbors of the query 73, 75 comes first.",
"h": "10-vector-search-en.html#w-nn"
},
"w-nn": {
"t": "Nearest neighbors",
"d": "The vectors nearest to the query. For example, among the neighbors of the query 73, 75 comes first.",
"h": "10-vector-search-en.html#w-nn"
},
"10-vector-search-en.html#w-ann": {
"t": "ANN",
"d": "Approximate nearest neighbor search: looking at fewer vectors and finding the right neighbors most of the time. For example, finding 9 of the true top-10 gives recall 0.9.",
"h": "10-vector-search-en.html#w-ann"
},
"w-ann": {
"t": "ANN",
"d": "Approximate nearest neighbor search: looking at fewer vectors and finding the right neighbors most of the time. For example, finding 9 of the true top-10 gives recall 0.9.",
"h": "10-vector-search-en.html#w-ann"
},
"10-vector-search-en.html#w-distance": {
"t": "Distance",
"d": "The length of the difference between two vectors. For example, [0.8, 0.2] and [0.9, 0.1] differ by [0.1, −0.1], so the distance is √(0.01 + 0.01) = 0.14.",
"h": "10-vector-search-en.html#w-distance"
},
"w-distance": {
"t": "Distance",
"d": "The length of the difference between two vectors. For example, [0.8, 0.2] and [0.9, 0.1] differ by [0.1, −0.1], so the distance is √(0.01 + 0.01) = 0.14.",
"h": "10-vector-search-en.html#w-distance"
},
"10-vector-search-en.html#w-ivf": {
"t": "IVF",
"d": "Inverted file index: splitting the vectors into clusters and looking only at the clusters near the query. For example, 11,000 comparisons for 1 million vectors.",
"h": "10-vector-search-en.html#w-ivf"
},
"w-ivf": {
"t": "IVF",
"d": "Inverted file index: splitting the vectors into clusters and looking only at the clusters near the query. For example, 11,000 comparisons for 1 million vectors.",
"h": "10-vector-search-en.html#w-ivf"
},
"10-vector-search-en.html#w-nprobe": {
"t": "nprobe",
"d": "How many clusters IVF looks at. For example, with 1,000 clusters and nprobe = 10, only the vectors of 10 clusters are checked.",
"h": "10-vector-search-en.html#w-nprobe"
},
"w-nprobe": {
"t": "nprobe",
"d": "How many clusters IVF looks at. For example, with 1,000 clusters and nprobe = 10, only the vectors of 10 clusters are checked.",
"h": "10-vector-search-en.html#w-nprobe"
},
"10-vector-search-en.html#w-pq": {
"t": "Product quantization (PQ)",
"d": "Cutting a vector into pieces and storing, for each piece, the number of its nearest codeword. For example, [0.9, 0.1, 0.2, 0.8] becomes the code (0, 1).",
"h": "10-vector-search-en.html#w-pq"
},
"w-pq": {
"t": "Product quantization (PQ)",
"d": "Cutting a vector into pieces and storing, for each piece, the number of its nearest codeword. For example, [0.9, 0.1, 0.2, 0.8] becomes the code (0, 1).",
"h": "10-vector-search-en.html#w-pq"
},
"10-vector-search-en.html#w-codebook": {
"t": "Codebook",
"d": "The list of sample vectors (codewords) for a piece. For example, #0 [1, 0], #1 [0, 1], #2 [0.5, 0.5], #3 [0.7, 0.7].",
"h": "10-vector-search-en.html#w-codebook"
},
"w-codebook": {
"t": "Codebook",
"d": "The list of sample vectors (codewords) for a piece. For example, #0 [1, 0], #1 [0, 1], #2 [0.5, 0.5], #3 [0.7, 0.7].",
"h": "10-vector-search-en.html#w-codebook"
},
"10-vector-search-en.html#w-proxgraph": {
"t": "Proximity graph",
"d": "A graph in which every vector is linked to its nearby vectors. For example, 70 is linked to its neighbors 65 and 75.",
"h": "10-vector-search-en.html#w-proxgraph"
},
"w-proxgraph": {
"t": "Proximity graph",
"d": "A graph in which every vector is linked to its nearby vectors. For example, 70 is linked to its neighbors 65 and 75.",
"h": "10-vector-search-en.html#w-proxgraph"
},
"10-vector-search-en.html#w-greedy": {
"t": "Greedy search",
"d": "Moving at every step to the neighbor nearest to the query, until stuck. For example, moving from 70 to 75 for the query 73.",
"h": "10-vector-search-en.html#w-greedy"
},
"w-greedy": {
"t": "Greedy search",
"d": "Moving at every step to the neighbor nearest to the query, until stuck. For example, moving from 70 to 75 for the query 73.",
"h": "10-vector-search-en.html#w-greedy"
},
"10-vector-search-en.html#w-hnsw": {
"t": "HNSW",
"d": "A layered proximity graph: a greedy walk from the top, dropping one layer when stuck. For example, 4 steps for the query 73.",
"h": "10-vector-search-en.html#w-hnsw"
},
"w-hnsw": {
"t": "HNSW",
"d": "A layered proximity graph: a greedy walk from the top, dropping one layer when stuck. For example, 4 steps for the query 73.",
"h": "10-vector-search-en.html#w-hnsw"
},
"10-vector-search-dense-en.html#w-kmeans": {
"t": "k-means",
"d": "A way to split vectors into k clusters: give each vector to its nearest centroid, then make each centroid the average, and repeat. For example, on 6 passages it ends after 3 rounds with A = [0.817, 0.2] and B = [0.2, 0.8].",
"h": "10-vector-search-dense-en.html#w-kmeans"
},
"w-kmeans": {
"t": "k-means",
"d": "A way to split vectors into k clusters: give each vector to its nearest centroid, then make each centroid the average, and repeat. For example, on 6 passages it ends after 3 rounds with A = [0.817, 0.2] and B = [0.2, 0.8].",
"h": "10-vector-search-dense-en.html#w-kmeans"
},
"10-vector-search-dense-en.html#w-adc": {
"t": "Lookup table (ADC)",
"d": "Computing the score of every query piece with every codeword in advance and keeping them in a table. Each passage's score is then just a sum of table entries. For example, the score of code (0, 1) is 1 + 1 = 2.0.",
"h": "10-vector-search-dense-en.html#w-adc"
},
"w-adc": {
"t": "Lookup table (ADC)",
"d": "Computing the score of every query piece with every codeword in advance and keeping them in a table. Each passage's score is then just a sum of table entries. For example, the score of code (0, 1) is 1 + 1 = 2.0.",
"h": "10-vector-search-dense-en.html#w-adc"
},
"10-vector-search-dense-en.html#w-residual": {
"t": "Residual",
"d": "What is left after subtracting a vector's cluster centroid from it. IVFADC stores the code of this difference. For example, queue log [0.85, 0.2] − [0.817, 0.2] = [0.033, 0].",
"h": "10-vector-search-dense-en.html#w-residual"
},
"w-residual": {
"t": "Residual",
"d": "What is left after subtracting a vector's cluster centroid from it. IVFADC stores the code of this difference. For example, queue log [0.85, 0.2] − [0.817, 0.2] = [0.033, 0].",
"h": "10-vector-search-dense-en.html#w-residual"
},
"10-vector-search-dense-en.html#w-ef": {
"t": "ef",
"d": "The size of the list of nearest nodes found so far in an HNSW search. A larger ef means more distances and higher recall. For example, starting at node 70 with ef = 3 gives {75, 70, 80}.",
"h": "10-vector-search-dense-en.html#w-ef"
},
"w-ef": {
"t": "ef",
"d": "The size of the list of nearest nodes found so far in an HNSW search. A larger ef means more distances and higher recall. For example, starting at node 70 with ef = 3 gives {75, 70, 80}.",
"h": "10-vector-search-dense-en.html#w-ef"
},
"10-vector-search-dense-en.html#w-heuristic": {
"t": "Rule for choosing neighbors (heuristic)",
"d": "A candidate is linked only if it is nearer to the new node than to every node already linked. For example, X links to A and E2, and B and C are skipped.",
"h": "10-vector-search-dense-en.html#w-heuristic"
},
"w-heuristic": {
"t": "Rule for choosing neighbors (heuristic)",
"d": "A candidate is linked only if it is nearer to the new node than to every node already linked. For example, X links to A and E2, and B and C are skipped.",
"h": "10-vector-search-dense-en.html#w-heuristic"
},
"11-bm25-en.html#w-term": {
"t": "Term",
"d": "One word of the query in search. For example, office and hour in <q>which office hour</q>.",
"h": "11-bm25-en.html#w-term"
},
"w-term": {
"t": "Term",
"d": "One word of the query in search. For example, office and hour in <q>which office hour</q>.",
"h": "11-bm25-en.html#w-term"
},
"11-bm25-en.html#w-df": {
"t": "Document frequency, n(q)",
"d": "How many documents contain term q. For example, n = 1 for milestone and 2 for office.",
"h": "11-bm25-en.html#w-df"
},
"w-df": {
"t": "Document frequency, n(q)",
"d": "How many documents contain term q. For example, n = 1 for milestone and 2 for office.",
"h": "11-bm25-en.html#w-df"
},
"11-bm25-en.html#w-idf": {
"t": "IDF",
"d": "ln((N − n + 0.5) ÷ (n + 0.5)), a bigger weight for a rarer term. For example, 1.299 for milestone and 0.588 for office.",
"h": "11-bm25-en.html#w-idf"
},
"w-idf": {
"t": "IDF",
"d": "ln((N − n + 0.5) ÷ (n + 0.5)), a bigger weight for a rarer term. For example, 1.299 for milestone and 0.588 for office.",
"h": "11-bm25-en.html#w-idf"
},
"11-bm25-en.html#w-tfidf": {
"t": "TF-IDF",
"d": "The term's count × ln(N ÷ n), an older method than BM25. For example, N = 6, n = 2, f = 2 gives 2 × ln 3 = 2.20.",
"h": "11-bm25-en.html#w-tfidf"
},
"w-tfidf": {
"t": "TF-IDF",
"d": "The term's count × ln(N ÷ n), an older method than BM25. For example, N = 6, n = 2, f = 2 gives 2 × ln 3 = 2.20.",
"h": "11-bm25-en.html#w-tfidf"
},
"11-bm25-en.html#w-tf": {
"t": "Term frequency, f(q, D)",
"d": "How many times term q appears in document D. For example, office has f = 2 in the queue log.",
"h": "11-bm25-en.html#w-tf"
},
"w-tf": {
"t": "Term frequency, f(q, D)",
"d": "How many times term q appears in document D. For example, office has f = 2 in the queue log.",
"h": "11-bm25-en.html#w-tf"
},
"11-bm25-en.html#w-saturation": {
"t": "Saturation and k1",
"d": "As the count grows, the gain fills up slowly towards a ceiling of k1 + 1. For example, with k1 = 1.2 the TF part for f = 1, 2, 10 is 1.000, 1.375, 1.964.",
"h": "11-bm25-en.html#w-saturation"
},
"w-saturation": {
"t": "Saturation and k1",
"d": "As the count grows, the gain fills up slowly towards a ceiling of k1 + 1. For example, with k1 = 1.2 the TF part for f = 1, 2, 10 is 1.000, 1.375, 1.964.",
"h": "11-bm25-en.html#w-saturation"
},
"11-bm25-en.html#w-lengthnorm": {
"t": "Length normalization, b and avgdl",
"d": "Lowering the TF part of documents longer than average, by an amount set by b. For example, with avgdl = 16.17 and b = 0.75, a document twice the average length gets 0.710.",
"h": "11-bm25-en.html#w-lengthnorm"
},
"w-lengthnorm": {
"t": "Length normalization, b and avgdl",
"d": "Lowering the TF part of documents longer than average, by an amount set by b. For example, with avgdl = 16.17 and b = 0.75, a document twice the average length gets 0.710.",
"h": "11-bm25-en.html#w-lengthnorm"
},
"11-bm25-en.html#w-bm25": {
"t": "BM25",
"d": "Each query term's IDF × its TF part, summed over the terms. For example, 2.749 for the forum post and 2.473 for the queue log.",
"h": "11-bm25-en.html#w-bm25"
},
"w-bm25": {
"t": "BM25",
"d": "Each query term's IDF × its TF part, summed over the terms. For example, 2.749 for the forum post and 2.473 for the queue log.",
"h": "11-bm25-en.html#w-bm25"
},
"11-bm25-en.html#w-inverted": {
"t": "Inverted index",
"d": "For each term, the list of documents that contain it. For example, office → office hours page, queue log.",
"h": "11-bm25-en.html#w-inverted"
},
"w-inverted": {
"t": "Inverted index",
"d": "For each term, the list of documents that contain it. For example, office → office hours page, queue log.",
"h": "11-bm25-en.html#w-inverted"
},
"11-bm25-en.html#w-sparse": {
"t": "Sparse and dense vector",
"d": "A long vector that is mostly zeros, and a short one that is almost full. For example, 55 of the 69 slots in the forum post's vector are 0.",
"h": "11-bm25-en.html#w-sparse"
},
"w-sparse": {
"t": "Sparse and dense vector",
"d": "A long vector that is mostly zeros, and a short one that is almost full. For example, 55 of the 69 slots in the forum post's vector are 0.",
"h": "11-bm25-en.html#w-sparse"
},
"11-bm25-dense-en.html#w-hyperparam": {
"t": "Hyperparameter",
"d": "A number in a formula or model that training does not change, picked by trying values on a dev set. For example, BM25's k1 and b, which the DPR paper set to 0.9 and 0.4.",
"h": "11-bm25-dense-en.html#w-hyperparam"
},
"w-hyperparam": {
"t": "Hyperparameter",
"d": "A number in a formula or model that training does not change, picked by trying values on a dev set. For example, BM25's k1 and b, which the DPR paper set to 0.9 and 0.4.",
"h": "11-bm25-dense-en.html#w-hyperparam"
},
"12-dpr-en.html#w-dpr": {
"t": "DPR",
"d": "Dense Passage Retrieval: a bi-encoder retriever with two BERT encoders, trained with contrastive loss on question-passage pairs. Built by Karpukhin and colleagues in 2020, and the retriever inside lesson 5's RAG.",
"h": "12-dpr-en.html#w-dpr"
},
"w-dpr": {
"t": "DPR",
"d": "Dense Passage Retrieval: a bi-encoder retriever with two BERT encoders, trained with contrastive loss on question-passage pairs. Built by Karpukhin and colleagues in 2020, and the retriever inside lesson 5's RAG.",
"h": "12-dpr-en.html#w-dpr"
},
"12-dpr-en.html#w-biencoder": {
"t": "Bi-encoder",
"d": "Two separate encoders for the question and the passage, with the score as their dot product. Passages are encoded in advance. For example, even with 21 million passages the model runs once per question.",
"h": "12-dpr-en.html#w-biencoder"
},
"w-biencoder": {
"t": "Bi-encoder",
"d": "Two separate encoders for the question and the passage, with the score as their dot product. Passages are encoded in advance. For example, even with 21 million passages the model runs once per question.",
"h": "12-dpr-en.html#w-biencoder"
},
"12-dpr-en.html#w-pretraining": {
"t": "Pretraining",
"d": "A model's first, large training on lots of general text. For example, BERT is first trained on general text.",
"h": "12-dpr-en.html#w-pretraining"
},
"w-pretraining": {
"t": "Pretraining",
"d": "A model's first, large training on lots of general text. For example, BERT is first trained on general text.",
"h": "12-dpr-en.html#w-pretraining"
},
"12-dpr-en.html#w-finetuning": {
"t": "Fine-tuning",
"d": "Training an already trained model further on data for your own task. For example, DPR trains BERT on question-passage pairs.",
"h": "12-dpr-en.html#w-finetuning"
},
"w-finetuning": {
"t": "Fine-tuning",
"d": "Training an already trained model further on data for your own task. For example, DPR trains BERT on question-passage pairs.",
"h": "12-dpr-en.html#w-finetuning"
},
"12-dpr-en.html#w-positive": {
"t": "Positive and negative passage",
"d": "The question's correct passage (p<sub>i</sub><sup>+</sup>), and wrong passages (p<sub>i,j</sub><sup>−</sup>). For example, the least-crowded question's positive is the queue log, and its negatives are the forum post and the Homework announcement.",
"h": "12-dpr-en.html#w-positive"
},
"w-positive": {
"t": "Positive and negative passage",
"d": "The question's correct passage (p<sub>i</sub><sup>+</sup>), and wrong passages (p<sub>i,j</sub><sup>−</sup>). For example, the least-crowded question's positive is the queue log, and its negatives are the forum post and the Homework announcement.",
"h": "12-dpr-en.html#w-positive"
},
"12-dpr-en.html#w-contrastive": {
"t": "Contrastive loss",
"d": "Softmax over the positive and negative scores, then −ln of the positive's share. It looks only at differences between scores. For example, scores 1.0, 2.0, 1.5 give loss 1.68, and 5.0, 2.0, 0.5 give 0.059.",
"h": "12-dpr-en.html#w-contrastive"
},
"w-contrastive": {
"t": "Contrastive loss",
"d": "Softmax over the positive and negative scores, then −ln of the positive's share. It looks only at differences between scores. For example, scores 1.0, 2.0, 1.5 give loss 1.68, and 5.0, 2.0, 0.5 give 0.059.",
"h": "12-dpr-en.html#w-contrastive"
},
"12-dpr-en.html#w-batch": {
"t": "Batch",
"d": "A group of questions that training processes together. For example, a batch of 128 questions in DPR.",
"h": "12-dpr-en.html#w-batch"
},
"w-batch": {
"t": "Batch",
"d": "A group of questions that training processes together. For example, a batch of 128 questions in DPR.",
"h": "12-dpr-en.html#w-batch"
},
"12-dpr-en.html#w-inbatch": {
"t": "In-batch negatives",
"d": "Using the positives of the other questions in the batch as negatives. For example, in a batch of 128 each question gets 127 negatives.",
"h": "12-dpr-en.html#w-inbatch"
},
"w-inbatch": {
"t": "In-batch negatives",
"d": "Using the positives of the other questions in the batch as negatives. For example, in a batch of 128 each question gets 127 negatives.",
"h": "12-dpr-en.html#w-inbatch"
},
"12-dpr-en.html#w-hardneg": {
"t": "Hard negative",
"d": "A wrong passage that looks similar to the question. DPR takes these from BM25's top passages. For example, the forum post for our question.",
"h": "12-dpr-en.html#w-hardneg"
},
"w-hardneg": {
"t": "Hard negative",
"d": "A wrong passage that looks similar to the question. DPR takes these from BM25's top passages. For example, the forum post for our question.",
"h": "12-dpr-en.html#w-hardneg"
},
"12-dpr-en.html#w-topkacc": {
"t": "Top-k retrieval accuracy",
"d": "The percentage of questions with an answer passage in the top k. For example, DPR's 78.4% on NQ at top-20.",
"h": "12-dpr-en.html#w-topkacc"
},
"w-topkacc": {
"t": "Top-k retrieval accuracy",
"d": "The percentage of questions with an answer passage in the top k. For example, DPR's 78.4% on NQ at top-20.",
"h": "12-dpr-en.html#w-topkacc"
},
"12-dpr-dense-en.html#w-partial": {
"t": "∂ (partial derivative)",
"d": "How fast an output changes when one input changes a little and everything else stays the same. For example, ∂𝓛/∂s<sup>+</sup> = −0.814: raise the queue log's score by 0.01 and the loss falls by about 0.008.",
"h": "12-dpr-dense-en.html#w-partial"
},
"w-partial": {
"t": "∂ (partial derivative)",
"d": "How fast an output changes when one input changes a little and everything else stays the same. For example, ∂𝓛/∂s<sup>+</sup> = −0.814: raise the queue log's score by 0.01 and the loss falls by about 0.008.",
"h": "12-dpr-dense-en.html#w-partial"
},
"12-dpr-dense-en.html#w-chainrule": {
"t": "Chain rule (for rates)",
"d": "Rates that are linked one after another multiply. For example, the rate of ln Z with respect to the queue log's score is 2.72 × (1 ÷ 14.59) = 0.186. Lesson 4's probability chain rule is a different rule.",
"h": "12-dpr-dense-en.html#w-chainrule"
},
"w-chainrule": {
"t": "Chain rule (for rates)",
"d": "Rates that are linked one after another multiply. For example, the rate of ln Z with respect to the queue log's score is 2.72 × (1 ÷ 14.59) = 0.186. Lesson 4's probability chain rule is a different rule.",
"h": "12-dpr-dense-en.html#w-chainrule"
},
"12-dpr-dense-en.html#w-rd": {
"t": "ℝ<sup>d</sup>",
"d": "A list of d real numbers, that is, a vector with d dimensions. For example, [1.0, 0.5, 0.5, 1.0] ∈ ℝ<sup>4</sup>, and DPR's vectors are in ℝ<sup>768</sup>.",
"h": "12-dpr-dense-en.html#w-rd"
},
"w-rd": {
"t": "ℝ<sup>d</sup>",
"d": "A list of d real numbers, that is, a vector with d dimensions. For example, [1.0, 0.5, 0.5, 1.0] ∈ ℝ<sup>4</sup>, and DPR's vectors are in ℝ<sup>768</sup>.",
"h": "12-dpr-dense-en.html#w-rd"
},
"12-dpr-dense-en.html#w-nabla": {
"t": "∇ (nabla)",
"d": "∇<sub>θ</sub>𝓛: the loss's rate for every parameter in θ, as one list. Training nudges each parameter a little against its rate. For example, on the three scores these rates were −0.814, +0.506 and +0.307.",
"h": "12-dpr-dense-en.html#w-nabla"
},
"w-nabla": {
"t": "∇ (nabla)",
"d": "∇<sub>θ</sub>𝓛: the loss's rate for every parameter in θ, as one list. Training nudges each parameter a little against its rate. For example, on the three scores these rates were −0.814, +0.506 and +0.307.",
"h": "12-dpr-dense-en.html#w-nabla"
},
"12-dpr-dense-en.html#w-faiss": {
"t": "FAISS",
"d": "An open-source library for fast search over vectors. For example, DPR built an HNSW index over 21 million vectors in it, which took about 8.5 hours.",
"h": "12-dpr-dense-en.html#w-faiss"
},
"w-faiss": {
"t": "FAISS",
"d": "An open-source library for fast search over vectors. For example, DPR built an HNSW index over 21 million vectors in it, which took about 8.5 hours.",
"h": "12-dpr-dense-en.html#w-faiss"
},
"12-dpr-dense-en.html#w-orqa": {
"t": "ORQA",
"d": "A 2019 dense retriever that trained its retriever with extra pretraining. For example, on NQ the full system's Exact Match is 33.3 with ORQA and 41.5 with DPR.",
"h": "12-dpr-dense-en.html#w-orqa"
},
"w-orqa": {
"t": "ORQA",
"d": "A 2019 dense retriever that trained its retriever with extra pretraining. For example, on NQ the full system's Exact Match is 33.3 with ORQA and 41.5 with DPR.",
"h": "12-dpr-dense-en.html#w-orqa"
},
"13-metrics-en.html#w-labels": {
"t": "Relevance labels",
"d": "The right passages fixed in advance for each query, sometimes with grades. For example, for q1 the queue log (grade 3) and the office hours page (grade 1).",
"h": "13-metrics-en.html#w-labels"
},
"w-labels": {
"t": "Relevance labels",
"d": "The right passages fixed in advance for each query, sometimes with grades. For example, for q1 the queue log (grade 3) and the office hours page (grade 1).",
"h": "13-metrics-en.html#w-labels"
},
"13-metrics-en.html#w-set": {
"t": "Set, ∩, ∅, |A|",
"d": "A group of things, the things two sets share, the empty set, and how many things a set holds. For example, |{queue log, office hours page}| = 2, and for q3, R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) = ∅.",
"h": "13-metrics-en.html#w-set"
},
"w-set": {
"t": "Set, ∩, ∅, |A|",
"d": "A group of things, the things two sets share, the empty set, and how many things a set holds. For example, |{queue log, office hours page}| = 2, and for q3, R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) = ∅.",
"h": "13-metrics-en.html#w-set"
},
"13-metrics-en.html#w-indicator": {
"t": "𝟙[condition]",
"d": "1 if the condition is true, 0 if not. For example, q3's top 3 holds no right passage, so 𝟙[R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) ≠ ∅] = 0.",
"h": "13-metrics-en.html#w-indicator"
},
"w-indicator": {
"t": "𝟙[condition]",
"d": "1 if the condition is true, 0 if not. For example, q3's top 3 holds no right passage, so 𝟙[R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) ≠ ∅] = 0.",
"h": "13-metrics-en.html#w-indicator"
},
"13-metrics-en.html#w-hitk": {
"t": "Hit@k",
"d": "The share of queries with at least one right passage in the top k. For example, at k = 3, 2 of 3 queries, so 0.667.",
"h": "13-metrics-en.html#w-hitk"
},
"w-hitk": {
"t": "Hit@k",
"d": "The share of queries with at least one right passage in the top k. For example, at k = 3, 2 of 3 queries, so 0.667.",
"h": "13-metrics-en.html#w-hitk"
},
"13-metrics-en.html#w-failedk": {
"t": "Failed@k",
"d": "1 − Hit@k, the share of queries with no right passage in the top k. For example, Failed@3 = 1 − 0.667 = 0.333.",
"h": "13-metrics-en.html#w-failedk"
},
"w-failedk": {
"t": "Failed@k",
"d": "1 − Hit@k, the share of queries with no right passage in the top k. For example, Failed@3 = 1 − 0.667 = 0.333.",
"h": "13-metrics-en.html#w-failedk"
},
"13-metrics-en.html#w-mrr": {
"t": "MRR@k",
"d": "1 ÷ the rank of the first right passage, averaged over the queries, with 0 if none is in the top k. For example, ranks 1, 2 and none give (1 + 0.5 + 0) ÷ 3 = 0.5.",
"h": "13-metrics-en.html#w-mrr"
},
"w-mrr": {
"t": "MRR@k",
"d": "1 ÷ the rank of the first right passage, averaged over the queries, with 0 if none is in the top k. For example, ranks 1, 2 and none give (1 + 0.5 + 0) ÷ 3 = 0.5.",
"h": "13-metrics-en.html#w-mrr"
},
"13-metrics-en.html#w-recallk": {
"t": "Recall@k",
"d": "Right passages found in the top k ÷ all right passages, averaged over the queries. For example, at k = 1 q1 found 1 of 2, so 0.5.",
"h": "13-metrics-en.html#w-recallk"
},
"w-recallk": {
"t": "Recall@k",
"d": "Right passages found in the top k ÷ all right passages, averaged over the queries. For example, at k = 1 q1 found 1 of 2, so 0.5.",
"h": "13-metrics-en.html#w-recallk"
},
"13-metrics-en.html#w-log2": {
"t": "log<sub>2</sub>",
"d": "The power you must raise 2 to in order to get a number. For example, log<sub>2</sub> 4 = 2, and log<sub>2</sub> 3 = 1.585.",
"h": "13-metrics-en.html#w-log2"
},
"w-log2": {
"t": "log<sub>2</sub>",
"d": "The power you must raise 2 to in order to get a number. For example, log<sub>2</sub> 4 = 2, and log<sub>2</sub> 3 = 1.585.",
"h": "13-metrics-en.html#w-log2"
},
"13-metrics-en.html#w-dcg": {
"t": "DCG and IDCG",
"d": "Each rank's grade ÷ log<sub>2</sub>(rank + 1), added up. The IDCG is the DCG of the best order. For example, q1's order queue log (3), forum post (0), office hours page (1) gives DCG 3.5 and IDCG 3.631.",
"h": "13-metrics-en.html#w-dcg"
},
"w-dcg": {
"t": "DCG and IDCG",
"d": "Each rank's grade ÷ log<sub>2</sub>(rank + 1), added up. The IDCG is the DCG of the best order. For example, q1's order queue log (3), forum post (0), office hours page (1) gives DCG 3.5 and IDCG 3.631.",
"h": "13-metrics-en.html#w-dcg"
},
"13-metrics-en.html#w-ndcg": {
"t": "nDCG@k",
"d": "DCG ÷ IDCG, between 0 and 1, which looks at both grade and order. For example, q1's reversed order gives 2.5 ÷ 3.631 = 0.689.",
"h": "13-metrics-en.html#w-ndcg"
},
"w-ndcg": {
"t": "nDCG@k",
"d": "DCG ÷ IDCG, between 0 and 1, which looks at both grade and order. For example, q1's reversed order gives 2.5 ÷ 3.631 = 0.689.",
"h": "13-metrics-en.html#w-ndcg"
},
"13-metrics-dense-en.html#w-subset": {
"t": "⊆ (subset)",
"d": "A ⊆ B means everything in A is also in B. For example, Top<sub>3</sub>(q1) ⊆ Top<sub>5</sub>(q1), so Recall@5 is never lower than Recall@3.",
"h": "13-metrics-dense-en.html#w-subset"
},
"w-subset": {
"t": "⊆ (subset)",
"d": "A ⊆ B means everything in A is also in B. For example, Top<sub>3</sub>(q1) ⊆ Top<sub>5</sub>(q1), so Recall@5 is never lower than Recall@3.",
"h": "13-metrics-dense-en.html#w-subset"
},
"13-metrics-dense-en.html#w-harmonic": {
"t": "Harmonic series",
"d": "1 + 1/2 + 1/3 + …, the 1 ÷ rank numbers that MRR uses. Their sum grows slowly, about ln n + 0.577. For example, the first 1,000 add up to 7.485.",
"h": "13-metrics-dense-en.html#w-harmonic"
},
"w-harmonic": {
"t": "Harmonic series",
"d": "1 + 1/2 + 1/3 + …, the 1 ÷ rank numbers that MRR uses. Their sum grows slowly, about ln n + 0.577. For example, the first 1,000 add up to 7.485.",
"h": "13-metrics-dense-en.html#w-harmonic"
},
"13-metrics-dense-en.html#w-points": {
"t": "Points (absolute difference)",
"d": "The plain difference between two percentages. For example, 52.2 to 54.0 is 1.8 points, which is an improvement of about 3.45% relative to 52.2.",
"h": "13-metrics-dense-en.html#w-points"
},
"w-points": {
"t": "Points (absolute difference)",
"d": "The plain difference between two percentages. For example, 52.2 to 54.0 is 1.8 points, which is an improvement of about 3.45% relative to 52.2.",
"h": "13-metrics-dense-en.html#w-points"
},
"13-metrics-dense-en.html#w-qrels": {
"t": "QRels",
"d": "A file of relevance labels: the IDs of the right documents for each query. For example, the late chunking paper computed nDCG@10 from such a file.",
"h": "13-metrics-dense-en.html#w-qrels"
},
"w-qrels": {
"t": "QRels",
"d": "A file of relevance labels: the IDs of the right documents for each query. For example, the late chunking paper computed nDCG@10 from such a file.",
"h": "13-metrics-dense-en.html#w-qrels"
},
"14-hybrid-rerank-en.html#w-paraphrase": {
"t": "Paraphrase",
"d": "The same statement in other words. For example, upload failed and upload keeps failing. BM25 misses it, because it counts shared words.",
"h": "14-hybrid-rerank-en.html#w-paraphrase"
},
"w-paraphrase": {
"t": "Paraphrase",
"d": "The same statement in other words. For example, upload failed and upload keeps failing. BM25 misses it, because it counts shared words.",
"h": "14-hybrid-rerank-en.html#w-paraphrase"
},
"14-hybrid-rerank-en.html#w-literal": {
"t": "Literal",
"d": "Text that has to match exactly, such as the error code E-4012 or the order ID A77-310. A dense retriever can miss it, and BM25 catches it as a rare word.",
"h": "14-hybrid-rerank-en.html#w-literal"
},
"w-literal": {
"t": "Literal",
"d": "Text that has to match exactly, such as the error code E-4012 or the order ID A77-310. A dense retriever can miss it, and BM25 catches it as a rare word.",
"h": "14-hybrid-rerank-en.html#w-literal"
},
"14-hybrid-rerank-en.html#w-hybrid": {
"t": "Hybrid search",
"d": "Running both a word-based and a dense retriever and merging their lists. For example, making one list from BM25's E1, E3, E2 and dense retrieval's E2, E1, E3.",
"h": "14-hybrid-rerank-en.html#w-hybrid"
},
"w-hybrid": {
"t": "Hybrid search",
"d": "Running both a word-based and a dense retriever and merging their lists. For example, making one list from BM25's E1, E3, E2 and dense retrieval's E2, E1, E3.",
"h": "14-hybrid-rerank-en.html#w-hybrid"
},
"14-hybrid-rerank-en.html#w-rrf": {
"t": "Reciprocal rank fusion (RRF)",
"d": "1 ÷ (k + rank) from a passage's rank in each list, summed over all lists, with k = 60. For example, E1: 1 ÷ 61 + 1 ÷ 62 = 0.03252.",
"h": "14-hybrid-rerank-en.html#w-rrf"
},
"w-rrf": {
"t": "Reciprocal rank fusion (RRF)",
"d": "1 ÷ (k + rank) from a passage's rank in each list, summed over all lists, with k = 60. For example, E1: 1 ÷ 61 + 1 ÷ 62 = 0.03252.",
"h": "14-hybrid-rerank-en.html#w-rrf"
},
"14-hybrid-rerank-en.html#w-attention": {
"t": "Attention",
"d": "Each token takes a weighted average of the other tokens' vectors as its new vector, and the weights add up to 1. For example, if crowded [0.5, 0.5] gives weight 0.6 to averaged [1.0, 0.0], it becomes [0.8, 0.2].",
"h": "14-hybrid-rerank-en.html#w-attention"
},
"w-attention": {
"t": "Attention",
"d": "Each token takes a weighted average of the other tokens' vectors as its new vector, and the weights add up to 1. For example, if crowded [0.5, 0.5] gives weight 0.6 to averaged [1.0, 0.0], it becomes [0.8, 0.2].",
"h": "14-hybrid-rerank-en.html#w-attention"
},
"14-hybrid-rerank-en.html#w-crossenc": {
"t": "Cross-encoder",
"d": "A reranker that joins the query and the passage, feeds them to one model, and gets a direct score for the pair. It runs in full for every passage, for example 10.7 ms per passage with BERT-base.",
"h": "14-hybrid-rerank-en.html#w-crossenc"
},
"w-crossenc": {
"t": "Cross-encoder",
"d": "A reranker that joins the query and the passage, feeds them to one model, and gets a direct score for the pair. It runs in full for every passage, for example 10.7 ms per passage with BERT-base.",
"h": "14-hybrid-rerank-en.html#w-crossenc"
},
"14-hybrid-rerank-en.html#w-reranking": {
"t": "Reranking",
"d": "Scoring and sorting a fast retriever's shortlist again with an accurate model. For example, on MS MARCO, MRR@10 goes from 16.7 for BM25 alone to 34.7 after reranking with BERT-base.",
"h": "14-hybrid-rerank-en.html#w-reranking"
},
"w-reranking": {
"t": "Reranking",
"d": "Scoring and sorting a fast retriever's shortlist again with an accurate model. For example, on MS MARCO, MRR@10 goes from 16.7 for BM25 alone to 34.7 after reranking with BERT-base.",
"h": "14-hybrid-rerank-en.html#w-reranking"
},
"14-hybrid-rerank-en.html#w-shortlist": {
"t": "Shortlist",
"d": "The retriever's top few passages, on which the reranker runs. For example, the top 100 of 60,000 passages, which the cross-encoder handles in 1,070 ms.",
"h": "14-hybrid-rerank-en.html#w-shortlist"
},
"w-shortlist": {
"t": "Shortlist",
"d": "The retriever's top few passages, on which the reranker runs. For example, the top 100 of 60,000 passages, which the cross-encoder handles in 1,070 ms.",
"h": "14-hybrid-rerank-en.html#w-shortlist"
},
"14-hybrid-rerank-dense-en.html#w-minmax": {
"t": "Min-max normalisation",
"d": "Mapping each list's scores onto 0 to 1 with (x − min) ÷ (max − min). For example, BM25's 7.2, 3.1 and 1.0 become 1, 0.339 and 0. The result depends on the list's min and max.",
"h": "14-hybrid-rerank-dense-en.html#w-minmax"
},
"w-minmax": {
"t": "Min-max normalisation",
"d": "Mapping each list's scores onto 0 to 1 with (x − min) ÷ (max − min). For example, BM25's 7.2, 3.1 and 1.0 become 1, 0.339 and 0. The result depends on the list's min and max.",
"h": "14-hybrid-rerank-dense-en.html#w-minmax"
},
"14-hybrid-rerank-dense-en.html#w-cls": {
"t": "[CLS] and [SEP]",
"d": "Special tokens in BERT's input. [CLS] comes first, and in a cross-encoder its last vector carries the whole pair. [SEP] separates the query from the passage, as in [CLS] query [SEP] passage [SEP].",
"h": "14-hybrid-rerank-dense-en.html#w-cls"
},
"w-cls": {
"t": "[CLS] and [SEP]",
"d": "Special tokens in BERT's input. [CLS] comes first, and in a cross-encoder its last vector carries the whole pair. [SEP] separates the query from the passage, as in [CLS] query [SEP] passage [SEP].",
"h": "14-hybrid-rerank-dense-en.html#w-cls"
},
"15-colbert-en.html#w-late": {
"t": "Late interaction",
"d": "The query's and the passage's token vectors are built separately, and meet only at scoring. For example, ColBERT builds passage vectors offline, and computes the dot products when the query arrives.",
"h": "15-colbert-en.html#w-late"
},
"w-late": {
"t": "Late interaction",
"d": "The query's and the passage's token vectors are built separately, and meet only at scoring. For example, ColBERT builds passage vectors offline, and computes the dot products when the query arrives.",
"h": "15-colbert-en.html#w-late"
},
"15-colbert-en.html#w-maxsim": {
"t": "MaxSim",
"d": "Each query token's largest dot product with the passage's tokens, then the sum of these. For example, 0.9 + 0.95 = 1.85 for the course FAQ.",
"h": "15-colbert-en.html#w-maxsim"
},
"w-maxsim": {
"t": "MaxSim",
"d": "Each query token's largest dot product with the passage's tokens, then the sum of these. For example, 0.9 + 0.95 = 1.85 for the course FAQ.",
"h": "15-colbert-en.html#w-maxsim"
},
"15-colbert-en.html#w-colbert": {
"t": "ColBERT",
"d": "A late-interaction retriever that keeps a vector per token and scores with MaxSim. Built by Khattab and Zaharia in 2020. For example, its Recall@1000 on MS MARCO is 96.8.",
"h": "15-colbert-en.html#w-colbert"
},
"w-colbert": {
"t": "ColBERT",
"d": "A late-interaction retriever that keeps a vector per token and scores with MaxSim. Built by Khattab and Zaharia in 2020. For example, its Recall@1000 on MS MARCO is 96.8.",
"h": "15-colbert-en.html#w-colbert"
},
"15-colbert-en.html#w-latency": {
"t": "Latency",
"d": "The time from sending a query to getting the answer, in ms. For example, the cross-encoder's latency is 10,700 ms for 1,000 passages, and ColBERT's reranking latency is 61 ms.",
"h": "15-colbert-en.html#w-latency"
},
"w-latency": {
"t": "Latency",
"d": "The time from sending a query to getting the answer, in ms. For example, the cross-encoder's latency is 10,700 ms for 1,000 passages, and ColBERT's reranking latency is 61 ms.",
"h": "15-colbert-en.html#w-latency"
},
"15-colbert-en.html#w-flops": {
"t": "FLOPs",
"d": "How many multiplications and additions it took, that is, the computer's work. For example, a dot product of 3 numbers takes 6 FLOPs, and one of 768 numbers takes 1,536.",
"h": "15-colbert-en.html#w-flops"
},
"w-flops": {
"t": "FLOPs",
"d": "How many multiplications and additions it took, that is, the computer's work. For example, a dot product of 3 numbers takes 6 FLOPs, and one of 768 numbers takes 1,536.",
"h": "15-colbert-en.html#w-flops"
},
"15-colbert-en.html#w-cascade": {
"t": "Cascade",
"d": "A line of retrievers in which each later step does more precise, more expensive work on fewer passages. For example, from tens of millions to 1,000, then 50, then 5.",
"h": "15-colbert-en.html#w-cascade"
},
"w-cascade": {
"t": "Cascade",
"d": "A line of retrievers in which each later step does more precise, more expensive work on fewer passages. For example, from tens of millions to 1,000, then 50, then 5.",
"h": "15-colbert-en.html#w-cascade"
},
"15-colbert-dense-en.html#w-intmatrix": {
"t": "Interaction matrix",
"d": "A table of the similarity of every query token with every passage token. For example, the FAQ's table holds 6 × 2 = 12 dot products.",
"h": "15-colbert-dense-en.html#w-intmatrix"
},
"w-intmatrix": {
"t": "Interaction matrix",
"d": "A table of the similarity of every query token with every passage token. For example, the FAQ's table holds 6 × 2 = 12 dot products.",
"h": "15-colbert-dense-en.html#w-intmatrix"
},
"15-colbert-dense-en.html#w-queryaug": {
"t": "Query augmentation",
"d": "Filling the query with [mask] tokens up to 32 tokens. BERT builds vectors for these too, and they join MaxSim like extra query tokens.",
"h": "15-colbert-dense-en.html#w-queryaug"
},
"w-queryaug": {
"t": "Query augmentation",
"d": "Filling the query with [mask] tokens up to 32 tokens. BERT builds vectors for these too, and they join MaxSim like extra query tokens.",
"h": "15-colbert-dense-en.html#w-queryaug"
},
"15-colbert-dense-en.html#w-gib": {
"t": "GiB",
"d": "2<sup>30</sup> = 1,073,741,824 bytes, about 7% more than a GB. For example, ColBERT's MS MARCO index is 286 GiB.",
"h": "15-colbert-dense-en.html#w-gib"
},
"w-gib": {
"t": "GiB",
"d": "2<sup>30</sup> = 1,073,741,824 bytes, about 7% more than a GB. For example, ColBERT's MS MARCO index is 286 GiB.",
"h": "15-colbert-dense-en.html#w-gib"
},
"15-colbert-dense-en.html#w-candgen": {
"t": "Candidate generation",
"d": "Picking candidate passages cheaply, so that the expensive arithmetic runs only on them. For example, in ColBERT each query vector brings back its top 1,000 token vectors, so at most 32,000 passages.",
"h": "15-colbert-dense-en.html#w-candgen"
},
"w-candgen": {
"t": "Candidate generation",
"d": "Picking candidate passages cheaply, so that the expensive arithmetic runs only on them. For example, in ColBERT each query vector brings back its top 1,000 token vectors, so at most 32,000 passages.",
"h": "15-colbert-dense-en.html#w-candgen"
},
"16-agentic-rag-en.html#w-agent": {
"t": "Agent",
"d": "An LLM that works in a loop: it chooses an action, reads the observation, and decides the next action. For example, when the search for <q>OH timings</q> came back empty, the agent wrote a new query.",
"h": "16-agentic-rag-en.html#w-agent"
},
"w-agent": {
"t": "Agent",
"d": "An LLM that works in a loop: it chooses an action, reads the observation, and decides the next action. For example, when the search for <q>OH timings</q> came back empty, the agent wrote a new query.",
"h": "16-agentic-rag-en.html#w-agent"
},
"16-agentic-rag-en.html#w-action": {
"t": "Action and tool",
"d": "What the agent chooses to do, such as searching for <q>OH timings</q>. A tool is the program that does it, such as a search engine.",
"h": "16-agentic-rag-en.html#w-action"
},
"w-action": {
"t": "Action and tool",
"d": "What the agent chooses to do, such as searching for <q>OH timings</q>. A tool is the program that does it, such as a search engine.",
"h": "16-agentic-rag-en.html#w-action"
},
"16-agentic-rag-en.html#w-observation": {
"t": "Observation",
"d": "The result of an action, which the agent reads before its next step. For example, the result of the first search: every passage scored 0.",
"h": "16-agentic-rag-en.html#w-observation"
},
"w-observation": {
"t": "Observation",
"d": "The result of an action, which the agent reads before its next step. For example, the result of the first search: every passage scored 0.",
"h": "16-agentic-rag-en.html#w-observation"
},
"16-agentic-rag-en.html#w-agentic": {
"t": "Agentic RAG",
"d": "RAG in which retrieval is an action of the agent, not a fixed step of a pipeline. For example, 0 searches for 17 × 3 and 3 for the Jed Hoyer question.",
"h": "16-agentic-rag-en.html#w-agentic"
},
"w-agentic": {
"t": "Agentic RAG",
"d": "RAG in which retrieval is an action of the agent, not a fixed step of a pipeline. For example, 0 searches for 17 × 3 and 3 for the Jed Hoyer question.",
"h": "16-agentic-rag-en.html#w-agentic"
},
"16-agentic-rag-en.html#w-selfrag": {
"t": "Self-RAG",
"d": "The generator itself writes reflection tokens to decide when to retrieve and which segment to keep. For example, Relevant and Partially on the forum post segment.",
"h": "16-agentic-rag-en.html#w-selfrag"
},
"w-selfrag": {
"t": "Self-RAG",
"d": "The generator itself writes reflection tokens to decide when to retrieve and which segment to keep. For example, Relevant and Partially on the forum post segment.",
"h": "16-agentic-rag-en.html#w-selfrag"
},
"16-agentic-rag-en.html#w-reflection": {
"t": "Reflection tokens",
"d": "Special tokens added to the vocabulary, which the model writes like any other text. For example, Retrieve, Relevant or Irrelevant, and Supported or Partially.",
"h": "16-agentic-rag-en.html#w-reflection"
},
"w-reflection": {
"t": "Reflection tokens",
"d": "Special tokens added to the vocabulary, which the model writes like any other text. For example, Retrieve, Relevant or Irrelevant, and Supported or Partially.",
"h": "16-agentic-rag-en.html#w-reflection"
},
"16-agentic-rag-en.html#w-crag": {
"t": "CRAG",
"d": "Corrective RAG: an evaluator calls the retrieval Correct, Incorrect or Ambiguous, and refinement, web search or both follow. For example, the forum post at 0.4 is Ambiguous.",
"h": "16-agentic-rag-en.html#w-crag"
},
"w-crag": {
"t": "CRAG",
"d": "Corrective RAG: an evaluator calls the retrieval Correct, Incorrect or Ambiguous, and refinement, web search or both follow. For example, the forum post at 0.4 is Ambiguous.",
"h": "16-agentic-rag-en.html#w-crag"
},
"16-agentic-rag-en.html#w-evaluator": {
"t": "Retrieval evaluator",
"d": "A small model that reads the question and one document and returns a confidence. For example, 0.4 for the forum post at K = 1.",
"h": "16-agentic-rag-en.html#w-evaluator"
},
"w-evaluator": {
"t": "Retrieval evaluator",
"d": "A small model that reads the question and one document and returns a confidence. For example, 0.4 for the forum post at K = 1.",
"h": "16-agentic-rag-en.html#w-evaluator"
},
"16-agentic-rag-en.html#w-refine": {
"t": "Knowledge refinement",
"d": "Splitting documents into strips, dropping the useless strips, and joining the rest in order. For example, 2 of the syllabus's 3 strips stay for the milestone question.",
"h": "16-agentic-rag-en.html#w-refine"
},
"w-refine": {
"t": "Knowledge refinement",
"d": "Splitting documents into strips, dropping the useless strips, and joining the rest in order. For example, 2 of the syllabus's 3 strips stay for the milestone question.",
"h": "16-agentic-rag-en.html#w-refine"
},
"16-agentic-rag-en.html#w-threshold": {
"t": "Threshold",
"d": "A limit set in advance, where being above or below it triggers a different action. For example, in CRAG above 0.6 means Correct, and below 0.2 means Incorrect.",
"h": "16-agentic-rag-en.html#w-threshold"
},
"w-threshold": {
"t": "Threshold",
"d": "A limit set in advance, where being above or below it triggers a different action. For example, in CRAG above 0.6 means Correct, and below 0.2 means Incorrect.",
"h": "16-agentic-rag-en.html#w-threshold"
},
"16-agentic-rag-dense-en.html#w-critic": {
"t": "Critic",
"d": "A model that grades what something else wrote or retrieved. For example, in Self-RAG a critic built from Llama 2 7B adds reflection tokens to the training data, and the CRAG slide calls its evaluator a critic.",
"h": "16-agentic-rag-dense-en.html#w-critic"
},
"w-critic": {
"t": "Critic",
"d": "A model that grades what something else wrote or retrieved. For example, in Self-RAG a critic built from Llama 2 7B adds reflection tokens to the training data, and the CRAG slide calls its evaluator a critic.",
"h": "16-agentic-rag-dense-en.html#w-critic"
},
"16-agentic-rag-dense-en.html#w-segscore": {
"t": "Segment score (Self-RAG)",
"d": "The weighted sum of a segment's critique shares: S = 1.0 × s<sub>IsRel</sub> + 1.0 × s<sub>IsSup</sub> + 0.5 × s<sub>IsUse</sub>. For example, the queue log segment's S = 0.9 + 0.875 + 0.5 × 0.75 = 2.15.",
"h": "16-agentic-rag-dense-en.html#w-segscore"
},
"w-segscore": {
"t": "Segment score (Self-RAG)",
"d": "The weighted sum of a segment's critique shares: S = 1.0 × s<sub>IsRel</sub> + 1.0 × s<sub>IsSup</sub> + 0.5 × s<sub>IsUse</sub>. For example, the queue log segment's S = 0.9 + 0.875 + 0.5 × 0.75 = 2.15.",
"h": "16-agentic-rag-dense-en.html#w-segscore"
},
"16-agentic-rag-dense-en.html#w-beam": {
"t": "Beam search",
"d": "Moving forward while keeping the B unfinished answers with the highest scores at each step. For example, with B = 2 the queue log (2.15) and forum post (1.475) answers go on, and Homework (0.425) is dropped.",
"h": "16-agentic-rag-dense-en.html#w-beam"
},
"w-beam": {
"t": "Beam search",
"d": "Moving forward while keeping the B unfinished answers with the highest scores at each step. For example, with B = 2 the queue log (2.15) and forum post (1.475) answers go on, and Homework (0.425) is dropped.",
"h": "16-agentic-rag-dense-en.html#w-beam"
},
"17-search-r1-en.html#w-rl": {
"t": "Reinforcement learning (RL)",
"d": "Learning by making attempts and using each attempt's reward. For example, if 2 of 4 rollouts have reward 1, the probability of the tokens in those two goes up.",
"h": "17-search-r1-en.html#w-rl"
},
"w-rl": {
"t": "Reinforcement learning (RL)",
"d": "Learning by making attempts and using each attempt's reward. For example, if 2 of 4 rollouts have reward 1, the probability of the tokens in those two goes up.",
"h": "17-search-r1-en.html#w-rl"
},
"17-search-r1-en.html#w-policy": {
"t": "Policy",
"d": "Whatever makes the decision at each step. Here the LLM, which picks the next token every time: think, &lt;search&gt; or &lt;answer&gt;.",
"h": "17-search-r1-en.html#w-policy"
},
"w-policy": {
"t": "Policy",
"d": "Whatever makes the decision at each step. Here the LLM, which picks the next token every time: think, &lt;search&gt; or &lt;answer&gt;.",
"h": "17-search-r1-en.html#w-policy"
},
"17-search-r1-en.html#w-rollout": {
"t": "Rollout (trajectory)",
"d": "One complete attempt at a question, from the start to the final answer. For example, o<sub>1</sub> on the Hoyer question: it searched both dates, then answered.",
"h": "17-search-r1-en.html#w-rollout"
},
"w-rollout": {
"t": "Rollout (trajectory)",
"d": "One complete attempt at a question, from the start to the final answer. For example, o<sub>1</sub> on the Hoyer question: it searched both dates, then answered.",
"h": "17-search-r1-en.html#w-rollout"
},
"17-search-r1-en.html#w-reward": {
"t": "Reward",
"d": "The number at the end of a rollout. For example, 1 if the answer matches exactly, 0 otherwise.",
"h": "17-search-r1-en.html#w-reward"
},
"w-reward": {
"t": "Reward",
"d": "The number at the end of a rollout. For example, 1 if the answer matches exactly, 0 otherwise.",
"h": "17-search-r1-en.html#w-reward"
},
"17-search-r1-en.html#w-searchr1": {
"t": "Search-R1",
"d": "A method that teaches an LLM search decisions with RL, using think, search, information and answer tags. The reward is given only on the final answer.",
"h": "17-search-r1-en.html#w-searchr1"
},
"w-searchr1": {
"t": "Search-R1",
"d": "A method that teaches an LLM search decisions with RL, using think, search, information and answer tags. The reward is given only on the final answer.",
"h": "17-search-r1-en.html#w-searchr1"
},
"17-search-r1-en.html#w-advantage": {
"t": "Advantage",
"d": "How much better or worse than expected a rollout did. For example, with rewards 0, 0, 0, 1, o<sub>4</sub> gets +1.73 and the other three −0.58.",
"h": "17-search-r1-en.html#w-advantage"
},
"w-advantage": {
"t": "Advantage",
"d": "How much better or worse than expected a rollout did. For example, with rewards 0, 0, 0, 1, o<sub>4</sub> gets +1.73 and the other three −0.58.",
"h": "17-search-r1-en.html#w-advantage"
},
"17-search-r1-en.html#w-ppo": {
"t": "PPO and value model",
"d": "A common RL method that trains a separate model (the value model) to estimate the coming reward. For example, an estimate of 0.25 and a reward of 1 give an advantage of +0.75.",
"h": "17-search-r1-en.html#w-ppo"
},
"w-ppo": {
"t": "PPO and value model",
"d": "A common RL method that trains a separate model (the value model) to estimate the coming reward. For example, an estimate of 0.25 and a reward of 1 give an advantage of +0.75.",
"h": "17-search-r1-en.html#w-ppo"
},
"17-search-r1-en.html#w-grpo": {
"t": "GRPO",
"d": "An advantage from the mean and standard deviation of a group's rewards. No value model is needed. For example, for 0, 0, 0, 1 the mean is 0.25 and the standard deviation 0.433.",
"h": "17-search-r1-en.html#w-grpo"
},
"w-grpo": {
"t": "GRPO",
"d": "An advantage from the mean and standard deviation of a group's rewards. No value model is needed. For example, for 0, 0, 0, 1 the mean is 0.25 and the standard deviation 0.433.",
"h": "17-search-r1-en.html#w-grpo"
},
"17-search-r1-en.html#w-std": {
"t": "Standard deviation",
"d": "A measure of how spread out numbers are: the average of the squared differences from the mean, then the square root. For example, for 0, 0, 0, 1 the mean is 0.25, the squares are 0.5625, 0.0625, 0.0625, 0.0625, their average is 0.1875, and the square root is 0.433.",
"h": "17-search-r1-en.html#w-std"
},
"w-std": {
"t": "Standard deviation",
"d": "A measure of how spread out numbers are: the average of the squared differences from the mean, then the square root. For example, for 0, 0, 0, 1 the mean is 0.25, the squares are 0.5625, 0.0625, 0.0625, 0.0625, their average is 0.1875, and the square root is 0.433.",
"h": "17-search-r1-en.html#w-std"
},
"17-search-r1-en.html#w-kl": {
"t": "Reference LLM and KL penalty",
"d": "A frozen copy of the model from before training, and a penalty that stops the new model from moving far from it. For example, if &lt;search&gt; goes from probability 0.2 to 0.9, the penalty is large.",
"h": "17-search-r1-en.html#w-kl"
},
"w-kl": {
"t": "Reference LLM and KL penalty",
"d": "A frozen copy of the model from before training, and a penalty that stops the new model from moving far from it. For example, if &lt;search&gt; goes from probability 0.2 to 0.9, the penalty is large.",
"h": "17-search-r1-en.html#w-kl"
},
"17-search-r1-dense-en.html#w-expect": {
"t": "Expected value, 𝔼[ · ]",
"d": "Multiplying each outcome by its probability and adding, that is, the average over many rollouts. For example, 0.6 × 1 + 0.4 × 0 = 0.6.",
"h": "17-search-r1-dense-en.html#w-expect"
},
"w-expect": {
"t": "Expected value, 𝔼[ · ]",
"d": "Multiplying each outcome by its probability and adding, that is, the average over many rollouts. For example, 0.6 × 1 + 0.4 × 0 = 0.6.",
"h": "17-search-r1-dense-en.html#w-expect"
},
"17-search-r1-dense-en.html#w-kldiv": {
"t": "KL divergence",
"d": "The average of ln(new probability ÷ reference probability), weighted by the new model's probabilities. For example, 1.146 for 0.2 and 0.8 becoming 0.9 and 0.1, and 0.007 for 0.25 and 0.75.",
"h": "17-search-r1-dense-en.html#w-kldiv"
},
"w-kldiv": {
"t": "KL divergence",
"d": "The average of ln(new probability ÷ reference probability), weighted by the new model's probabilities. For example, 1.146 for 0.2 and 0.8 becoming 0.9 and 0.1, and 0.007 for 0.25 and 0.75.",
"h": "17-search-r1-dense-en.html#w-kldiv"
},
"17-search-r1-dense-en.html#w-ratio": {
"t": "Probability ratio",
"d": "π<sub>θ</sub>(token) ÷ π<sub>old</sub>(token), how many times larger a token's probability is than under the model that made the rollout. For example, 0.55 ÷ 0.5 = 1.1.",
"h": "17-search-r1-dense-en.html#w-ratio"
},
"w-ratio": {
"t": "Probability ratio",
"d": "π<sub>θ</sub>(token) ÷ π<sub>old</sub>(token), how many times larger a token's probability is than under the model that made the rollout. For example, 0.55 ÷ 0.5 = 1.1.",
"h": "17-search-r1-dense-en.html#w-ratio"
},
"17-search-r1-dense-en.html#w-clip": {
"t": "Clipping and ε",
"d": "Keeping the ratio between 1 − ε and 1 + ε, then taking the smaller term with min. For example, with ε = 0.2 and A = +1.73, the term for a ratio of 1.5 stops at 2.076.",
"h": "17-search-r1-dense-en.html#w-clip"
},
"w-clip": {
"t": "Clipping and ε",
"d": "Keeping the ratio between 1 − ε and 1 + ε, then taking the smaller term with min. For example, with ε = 0.2 and A = +1.73, the term for a ratio of 1.5 stops at 2.076.",
"h": "17-search-r1-dense-en.html#w-clip"
},
"17-search-r1-dense-en.html#w-mask": {
"t": "Retrieved token masking",
"d": "Computing training terms only on tokens the model wrote, leaving out the tokens inside &lt;information&gt;. For example, 114 of the 430 words in the slide's trace. Without the mask the average falls from 0.431 to 0.343.",
"h": "17-search-r1-dense-en.html#w-mask"
},
"w-mask": {
"t": "Retrieved token masking",
"d": "Computing training terms only on tokens the model wrote, leaving out the tokens inside &lt;information&gt;. For example, 114 of the 430 words in the slide's trace. Without the mask the average falls from 0.431 to 0.343.",
"h": "17-search-r1-dense-en.html#w-mask"
},
"17-search-r1-dense-en.html#w-gae": {
"t": "GAE",
"d": "Generalized advantage estimation: at every step δ = reward + next estimate − this estimate, then the sum of all later δ. With γ = λ = 1 the advantage is reward − V, such as 1 − 0.3 = 0.7.",
"h": "17-search-r1-dense-en.html#w-gae"
},
"w-gae": {
"t": "GAE",
"d": "Generalized advantage estimation: at every step δ = reward + next estimate − this estimate, then the sum of all later δ. With γ = λ = 1 the advantage is reward − V, such as 1 − 0.3 = 0.7.",
"h": "17-search-r1-dense-en.html#w-gae"
},
"17-search-r1-dense-en.html#w-rejsamp": {
"t": "Rejection sampling",
"d": "Making several rollouts per question and fine-tuning only on those with the right answer. For example, 5 rollouts per question in the paper, with an average of 0.348 over 7 datasets.",
"h": "17-search-r1-dense-en.html#w-rejsamp"
},
"w-rejsamp": {
"t": "Rejection sampling",
"d": "Making several rollouts per question and fine-tuning only on those with the right answer. For example, 5 rollouts per question in the paper, with an average of 0.348 over 7 datasets.",
"h": "17-search-r1-dense-en.html#w-rejsamp"
},
"18-failure-modes-en.html#w-stale": {
"t": "Stale index",
"d": "The document changed, but the index keeps its old passage and embedding. For example, Tuesday 4pm after the move to Wednesday 2pm.",
"h": "18-failure-modes-en.html#w-stale"
},
"w-stale": {
"t": "Stale index",
"d": "The document changed, but the index keeps its old passage and embedding. For example, Tuesday 4pm after the move to Wednesday 2pm.",
"h": "18-failure-modes-en.html#w-stale"
},
"18-failure-modes-en.html#w-permleak": {
"t": "Permission leak",
"d": "The retriever brings a passage this user is not allowed to see. For example, other students' grades for a student.",
"h": "18-failure-modes-en.html#w-permleak"
},
"w-permleak": {
"t": "Permission leak",
"d": "The retriever brings a passage this user is not allowed to see. For example, other students' grades for a student.",
"h": "18-failure-modes-en.html#w-permleak"
},
"18-failure-modes-en.html#w-lostmiddle": {
"t": "Lost in the middle",
"d": "An LLM uses the middle of a long prompt less (position bias). For example, with 20 passages, 75.8% right at first place and 53.8% at 10th.",
"h": "18-failure-modes-en.html#w-lostmiddle"
},
"w-lostmiddle": {
"t": "Lost in the middle",
"d": "An LLM uses the middle of a long prompt less (position bias). For example, with 20 passages, 75.8% right at first place and 53.8% at 10th.",
"h": "18-failure-modes-en.html#w-lostmiddle"
},
"18-failure-modes-en.html#w-distraction": {
"t": "Distraction",
"d": "A similar but useless passage leads the reader astray. For example, the old 2024 forum post.",
"h": "18-failure-modes-en.html#w-distraction"
},
"w-distraction": {
"t": "Distraction",
"d": "A similar but useless passage leads the reader astray. For example, the old 2024 forum post.",
"h": "18-failure-modes-en.html#w-distraction"
},
"18-failure-modes-en.html#w-conflict": {
"t": "Evidence conflict",
"d": "Two sources, or a source and the model's parameters, say different things. For example, Week 6 and Week 7.",
"h": "18-failure-modes-en.html#w-conflict"
},
"w-conflict": {
"t": "Evidence conflict",
"d": "Two sources, or a source and the model's parameters, say different things. For example, Week 6 and Week 7.",
"h": "18-failure-modes-en.html#w-conflict"
},
"18-failure-modes-en.html#w-compounding": {
"t": "Compounding error",
"d": "An early mistake carries into every later step. For example, with each step right at 0.9, 3 steps give 0.729 and 5 steps give 0.59.",
"h": "18-failure-modes-en.html#w-compounding"
},
"w-compounding": {
"t": "Compounding error",
"d": "An early mistake carries into every later step. For example, with each step right at 0.9, 3 steps give 0.729 and 5 steps give 0.59.",
"h": "18-failure-modes-en.html#w-compounding"
},
"18-failure-modes-en.html#w-stopping": {
"t": "No stopping rule",
"d": "The agent has no clear condition for stopping. For example, 15 searches on one question.",
"h": "18-failure-modes-en.html#w-stopping"
},
"w-stopping": {
"t": "No stopping rule",
"d": "The agent has no clear condition for stopping. For example, 15 searches on one question.",
"h": "18-failure-modes-en.html#w-stopping"
},
"18-failure-modes-en.html#w-injection": {
"t": "Prompt injection",
"d": "Retrieved text becomes a command for the agent. For example, a hidden <q>Ignore previous instructions</q> in a post.",
"h": "18-failure-modes-en.html#w-injection"
},
"w-injection": {
"t": "Prompt injection",
"d": "Retrieved text becomes a command for the agent. For example, a hidden <q>Ignore previous instructions</q> in a post.",
"h": "18-failure-modes-en.html#w-injection"
},
"18-failure-modes-dense-en.html#w-incremental": {
"t": "Incremental re-indexing",
"d": "Making embeddings only for new and changed passages, and removing the old passages of a changed document, instead of rebuilding the whole index. For example, 500 + 30 = 530 embeddings instead of 60,000.",
"h": "18-failure-modes-dense-en.html#w-incremental"
},
"w-incremental": {
"t": "Incremental re-indexing",
"d": "Making embeddings only for new and changed passages, and removing the old passages of a changed document, instead of rebuilding the whole index. For example, 500 + 30 = 530 embeddings instead of 60,000.",
"h": "18-failure-modes-dense-en.html#w-incremental"
},
"18-failure-modes-dense-en.html#w-prefilter": {
"t": "Pre-filter and post-filter",
"d": "A pre-filter removes forbidden passages before ranking, and a post-filter after taking the top K. For example, with 5 forbidden passages in the top 14, a post-filter leaves 9.",
"h": "18-failure-modes-dense-en.html#w-prefilter"
},
"w-prefilter": {
"t": "Pre-filter and post-filter",
"d": "A pre-filter removes forbidden passages before ranking, and a post-filter after taking the top K. For example, with 5 forbidden passages in the top 14, a post-filter leaves 9.",
"h": "18-failure-modes-dense-en.html#w-prefilter"
},
"18-failure-modes-dense-en.html#w-primacy": {
"t": "Primacy and recency bias",
"d": "An LLM's habit of using the start (primacy) and the end (recency) of a prompt more. For example, with 20 passages, 75.8% at the first position, 63.2% at the last and 53.8% at the 10th.",
"h": "18-failure-modes-dense-en.html#w-primacy"
},
"w-primacy": {
"t": "Primacy and recency bias",
"d": "An LLM's habit of using the start (primacy) and the end (recency) of a prompt more. For example, with 20 passages, 75.8% at the first position, 63.2% at the last and 53.8% at the 10th.",
"h": "18-failure-modes-dense-en.html#w-primacy"
}
};
