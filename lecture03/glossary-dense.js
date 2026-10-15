// Generated from the lesson pages' “नए शब्द” lists. Do not edit by hand.
window.GLOSSARY = {
"01-how-llms-answer-dense.html#w-llm": {
"t": "LLM",
"d": "Large language model: text पढ़कर आगे का text, एक बार में एक token, लिखने वाला model। जैसे Wednesday afternoon लिखने वाला model।",
"h": "01-how-llms-answer-dense.html#w-llm"
},
"w-llm": {
"t": "LLM",
"d": "Large language model: text पढ़कर आगे का text, एक बार में एक token, लिखने वाला model। जैसे Wednesday afternoon लिखने वाला model।",
"h": "01-how-llms-answer-dense.html#w-llm"
},
"01-how-llms-answer-dense.html#w-token": {
"t": "Token",
"d": "Text का छोटा टुकड़ा: शब्द, शब्द का हिस्सा, या punctuation। Model इन्हीं को पढ़ता और लिखता है। जैसे crowded के दो tokens: crowd और ed।",
"h": "01-how-llms-answer-dense.html#w-token"
},
"w-token": {
"t": "Token",
"d": "Text का छोटा टुकड़ा: शब्द, शब्द का हिस्सा, या punctuation। Model इन्हीं को पढ़ता और लिखता है। जैसे crowded के दो tokens: crowd और ed।",
"h": "01-how-llms-answer-dense.html#w-token"
},
"01-how-llms-answer-dense.html#w-vocabulary": {
"t": "Vocabulary",
"d": "Model के सारे tokens की तय list, जिसमें हर token का एक ID number है। जैसे उसमें Wednesday है, लेकिन Wednesdayy नहीं।",
"h": "01-how-llms-answer-dense.html#w-vocabulary"
},
"w-vocabulary": {
"t": "Vocabulary",
"d": "Model के सारे tokens की तय list, जिसमें हर token का एक ID number है। जैसे उसमें Wednesday है, लेकिन Wednesdayy नहीं।",
"h": "01-how-llms-answer-dense.html#w-vocabulary"
},
"01-how-llms-answer-dense.html#w-tokenizer": {
"t": "Tokenizer",
"d": "Text को vocabulary के tokens में तोड़ने वाला program। जैसे Wednesdayy को Wednesday और y में।",
"h": "01-how-llms-answer-dense.html#w-tokenizer"
},
"w-tokenizer": {
"t": "Tokenizer",
"d": "Text को vocabulary के tokens में तोड़ने वाला program। जैसे Wednesdayy को Wednesday और y में।",
"h": "01-how-llms-answer-dense.html#w-tokenizer"
},
"01-how-llms-answer-dense.html#w-probability": {
"t": "Probability",
"d": "0 से 1 के बीच का number, जो किसी बात का chance बताता है। सारे options का जोड़ 1 होता है। जैसे 20 में से 5 lectures में quiz हुआ, तो 5 ÷ 20 = 0.25।",
"h": "01-how-llms-answer-dense.html#w-probability"
},
"w-probability": {
"t": "Probability",
"d": "0 से 1 के बीच का number, जो किसी बात का chance बताता है। सारे options का जोड़ 1 होता है। जैसे 20 में से 5 lectures में quiz हुआ, तो 5 ÷ 20 = 0.25।",
"h": "01-how-llms-answer-dense.html#w-probability"
},
"01-how-llms-answer-dense.html#w-ntp": {
"t": "Next-token prediction",
"d": "अब तक का text देखकर हर token को probability देना, एक चुनना, जोड़ना, और दोहराना। जैसे Wednesday, फिर afternoon, फिर full stop।",
"h": "01-how-llms-answer-dense.html#w-ntp"
},
"w-ntp": {
"t": "Next-token prediction",
"d": "अब तक का text देखकर हर token को probability देना, एक चुनना, जोड़ना, और दोहराना। जैसे Wednesday, फिर afternoon, फिर full stop।",
"h": "01-how-llms-answer-dense.html#w-ntp"
},
"01-how-llms-answer-dense.html#w-parameters": {
"t": "Parameters (weights)",
"d": "Model के अंदर के numbers, जिनसे हर अगले token की probability निकलती है। जैसे T5-11B में करीब 11 billion parameters हैं।",
"h": "01-how-llms-answer-dense.html#w-parameters"
},
"w-parameters": {
"t": "Parameters (weights)",
"d": "Model के अंदर के numbers, जिनसे हर अगले token की probability निकलती है। जैसे T5-11B में करीब 11 billion parameters हैं।",
"h": "01-how-llms-answer-dense.html#w-parameters"
},
"01-how-llms-answer-dense.html#w-training": {
"t": "Training",
"d": "Parameters को थोड़ा-थोड़ा बदलना, ताकि text के असली अगले token की probability बढ़े। जैसे Office hours are on के बाद Thursday 0.10 से 0.12।",
"h": "01-how-llms-answer-dense.html#w-training"
},
"w-training": {
"t": "Training",
"d": "Parameters को थोड़ा-थोड़ा बदलना, ताकि text के असली अगले token की probability बढ़े। जैसे Office hours are on के बाद Thursday 0.10 से 0.12।",
"h": "01-how-llms-answer-dense.html#w-training"
},
"01-how-llms-answer-dense.html#w-parametric": {
"t": "Parametric knowledge",
"d": "Parameters में बँटी हुई जानकारी। Model इसका source नहीं बता सकता, और नई बात के लिए फिर से training चाहिए।",
"h": "01-how-llms-answer-dense.html#w-parametric"
},
"w-parametric": {
"t": "Parametric knowledge",
"d": "Parameters में बँटी हुई जानकारी। Model इसका source नहीं बता सकता, और नई बात के लिए फिर से training चाहिए।",
"h": "01-how-llms-answer-dense.html#w-parametric"
},
"01-how-llms-answer-dense.html#w-cutoff": {
"t": "Knowledge cutoff",
"d": "वो तारीख, जिस पर training रुकी। उसके बाद की बातें, और आपका private data, model में नहीं हैं। जैसे March 2026 की cutoff हो, तो Oct 2026 की announcement model में नहीं है।",
"h": "01-how-llms-answer-dense.html#w-cutoff"
},
"w-cutoff": {
"t": "Knowledge cutoff",
"d": "वो तारीख, जिस पर training रुकी। उसके बाद की बातें, और आपका private data, model में नहीं हैं। जैसे March 2026 की cutoff हो, तो Oct 2026 की announcement model में नहीं है।",
"h": "01-how-llms-answer-dense.html#w-cutoff"
},
"01-how-llms-answer-dense.html#w-prompt": {
"t": "Prompt",
"d": "वो text, जो आप model को अभी देते हैं: सवाल, instructions, और साथ के documents। जैसे queue log की line, जिससे Thursday 0.21 से 0.81 हुआ।",
"h": "01-how-llms-answer-dense.html#w-prompt"
},
"w-prompt": {
"t": "Prompt",
"d": "वो text, जो आप model को अभी देते हैं: सवाल, instructions, और साथ के documents। जैसे queue log की line, जिससे Thursday 0.21 से 0.81 हुआ।",
"h": "01-how-llms-answer-dense.html#w-prompt"
},
"01-how-llms-answer-dense.html#w-context": {
"t": "Context window",
"d": "Model एक बार में ज़्यादा से ज़्यादा कितने tokens पढ़ सकता है। Prompt और जवाब, दोनों इसमें आते हैं। जैसे 8,000 की window में 7,500 का prompt हो, तो जवाब के लिए 500 बचते हैं।",
"h": "01-how-llms-answer-dense.html#w-context"
},
"w-context": {
"t": "Context window",
"d": "Model एक बार में ज़्यादा से ज़्यादा कितने tokens पढ़ सकता है। Prompt और जवाब, दोनों इसमें आते हैं। जैसे 8,000 की window में 7,500 का prompt हो, तो जवाब के लिए 500 बचते हैं।",
"h": "01-how-llms-answer-dense.html#w-context"
},
"01-how-llms-answer-dense.html#w-hallucination": {
"t": "Hallucination",
"d": "भरोसे वाला, लेकिन गलत या बिना source वाला जवाब। जैसे log देखे बिना लिखा Wednesday afternoon।",
"h": "01-how-llms-answer-dense.html#w-hallucination"
},
"w-hallucination": {
"t": "Hallucination",
"d": "भरोसे वाला, लेकिन गलत या बिना source वाला जवाब। जैसे log देखे बिना लिखा Wednesday afternoon।",
"h": "01-how-llms-answer-dense.html#w-hallucination"
},
"01-how-llms-answer-dense.html#w-decoding": {
"t": "Greedy decoding और sampling",
"d": "हर step पर सबसे ऊँची probability वाला token लेना greedy decoding है, और probability के हिसाब से random चुनना sampling। जैसे greedy हर बार Wednesday afternoon लिखता है, और sampling 100 में से करीब 21 बार Thursday से शुरू करता है।",
"h": "01-how-llms-answer-dense.html#w-decoding"
},
"w-decoding": {
"t": "Greedy decoding और sampling",
"d": "हर step पर सबसे ऊँची probability वाला token लेना greedy decoding है, और probability के हिसाब से random चुनना sampling। जैसे greedy हर बार Wednesday afternoon लिखता है, और sampling 100 में से करीब 21 बार Thursday से शुरू करता है।",
"h": "01-how-llms-answer-dense.html#w-decoding"
},
"01-how-llms-answer-dense.html#w-ssm": {
"t": "Salient span masking (SSM)",
"d": "Pretraining का extra दौर, जिसमें model Wikipedia के sentences में नाम और तारीखों की खाली जगह भरता है। जैसे इससे T5-11B का TriviaQA score 50.1 से 60.5 हुआ।",
"h": "01-how-llms-answer-dense.html#w-ssm"
},
"w-ssm": {
"t": "Salient span masking (SSM)",
"d": "Pretraining का extra दौर, जिसमें model Wikipedia के sentences में नाम और तारीखों की खाली जगह भरता है। जैसे इससे T5-11B का TriviaQA score 50.1 से 60.5 हुआ।",
"h": "01-how-llms-answer-dense.html#w-ssm"
},
"01-how-llms-answer-dense.html#w-bart": {
"t": "BART",
"d": "Text पढ़कर text लिखने वाला model, जिसमें करीब 400 million parameters हैं। RAG का generator यही है। जैसे Jeopardy test में अकेला BART सिर्फ़ 7.1% जोड़ों में ज़्यादा factual निकला।",
"h": "01-how-llms-answer-dense.html#w-bart"
},
"w-bart": {
"t": "BART",
"d": "Text पढ़कर text लिखने वाला model, जिसमें करीब 400 million parameters हैं। RAG का generator यही है। जैसे Jeopardy test में अकेला BART सिर्फ़ 7.1% जोड़ों में ज़्यादा factual निकला।",
"h": "01-how-llms-answer-dense.html#w-bart"
},
"01-how-llms-answer-dense.html#w-hotswap": {
"t": "Index hot-swapping",
"d": "Parameters छुए बिना documents का index बदलना, ताकि model की जानकारी बदले। जैसे 2018 के index से 2018 के leaders पर 68% सही जवाब, और 2016 के index से सिर्फ़ 4%।",
"h": "01-how-llms-answer-dense.html#w-hotswap"
},
"w-hotswap": {
"t": "Index hot-swapping",
"d": "Parameters छुए बिना documents का index बदलना, ताकि model की जानकारी बदले। जैसे 2018 के index से 2018 के leaders पर 68% सही जवाब, और 2016 के index से सिर्फ़ 4%।",
"h": "01-how-llms-answer-dense.html#w-hotswap"
},
"02-retrieval-dense.html#w-corpus": {
"t": "Corpus (collection)",
"d": "सारे documents का set। जैसे company के 2,000 documents, या इस course के 6 छोटे texts।",
"h": "02-retrieval-dense.html#w-corpus"
},
"w-corpus": {
"t": "Corpus (collection)",
"d": "सारे documents का set। जैसे company के 2,000 documents, या इस course के 6 छोटे texts।",
"h": "02-retrieval-dense.html#w-corpus"
},
"02-retrieval-dense.html#w-document": {
"t": "Document",
"d": "Corpus की एक चीज़: web page, file या email। जैसे course का syllabus।",
"h": "02-retrieval-dense.html#w-document"
},
"w-document": {
"t": "Document",
"d": "Corpus की एक चीज़: web page, file या email। जैसे course का syllabus।",
"h": "02-retrieval-dense.html#w-document"
},
"02-retrieval-dense.html#w-passage": {
"t": "Passage",
"d": "Document का छोटा टुकड़ा, जो retriever लौटाता है। जैसे syllabus का वो paragraph, जिसमें milestone की तारीख है।",
"h": "02-retrieval-dense.html#w-passage"
},
"w-passage": {
"t": "Passage",
"d": "Document का छोटा टुकड़ा, जो retriever लौटाता है। जैसे syllabus का वो paragraph, जिसमें milestone की तारीख है।",
"h": "02-retrieval-dense.html#w-passage"
},
"02-retrieval-dense.html#w-query": {
"t": "Query",
"d": "वो सवाल, जिसके लिए ढूँढना है। जैसे “which office hour is least crowded”।",
"h": "02-retrieval-dense.html#w-query"
},
"w-query": {
"t": "Query",
"d": "वो सवाल, जिसके लिए ढूँढना है। जैसे “which office hour is least crowded”।",
"h": "02-retrieval-dense.html#w-query"
},
"02-retrieval-dense.html#w-retrieval": {
"t": "Retrieval",
"d": "Query के लिए काम के passages ढूँढकर prompt में रखना। जैसे queue log का passage सवाल के साथ prompt में जाए।",
"h": "02-retrieval-dense.html#w-retrieval"
},
"w-retrieval": {
"t": "Retrieval",
"d": "Query के लिए काम के passages ढूँढकर prompt में रखना। जैसे queue log का passage सवाल के साथ prompt में जाए।",
"h": "02-retrieval-dense.html#w-retrieval"
},
"02-retrieval-dense.html#w-citation": {
"t": "Citation",
"d": "जवाब के साथ उसका source। जैसे “Thursday 9am [P3]” में [P3], यानी queue log।",
"h": "02-retrieval-dense.html#w-citation"
},
"w-citation": {
"t": "Citation",
"d": "जवाब के साथ उसका source। जैसे “Thursday 9am [P3]” में [P3], यानी queue log।",
"h": "02-retrieval-dense.html#w-citation"
},
"02-retrieval-dense.html#w-nonparam": {
"t": "Non-parametric memory",
"d": "Model के बाहर, corpus में रखी जानकारी। जैसे queue log: उसे बदलने के लिए training नहीं चाहिए।",
"h": "02-retrieval-dense.html#w-nonparam"
},
"w-nonparam": {
"t": "Non-parametric memory",
"d": "Model के बाहर, corpus में रखी जानकारी। जैसे queue log: उसे बदलने के लिए training नहीं चाहिए।",
"h": "02-retrieval-dense.html#w-nonparam"
},
"02-retrieval-dense.html#w-retriever": {
"t": "Retriever",
"d": "हर passage को score देकर top-K लौटाने वाला हिस्सा। जैसे इस lesson का word overlap वाला retriever।",
"h": "02-retrieval-dense.html#w-retriever"
},
"w-retriever": {
"t": "Retriever",
"d": "हर passage को score देकर top-K लौटाने वाला हिस्सा। जैसे इस lesson का word overlap वाला retriever।",
"h": "02-retrieval-dense.html#w-retriever"
},
"02-retrieval-dense.html#w-score": {
"t": "Score",
"d": "Passage query के लिए कितना काम का है, उसका number। जैसे word overlap में queue log का score 2।",
"h": "02-retrieval-dense.html#w-score"
},
"w-score": {
"t": "Score",
"d": "Passage query के लिए कितना काम का है, उसका number। जैसे word overlap में queue log का score 2।",
"h": "02-retrieval-dense.html#w-score"
},
"02-retrieval-dense.html#w-topk": {
"t": "Top-K",
"d": "सबसे ज़्यादा score वाले K passages। जैसे K = 2 पर queue log और पुराना forum post।",
"h": "02-retrieval-dense.html#w-topk"
},
"w-topk": {
"t": "Top-K",
"d": "सबसे ज़्यादा score वाले K passages। जैसे K = 2 पर queue log और पुराना forum post।",
"h": "02-retrieval-dense.html#w-topk"
},
"02-retrieval-dense.html#w-overlap": {
"t": "Word overlap",
"d": "Query के कितने शब्द passage में भी हैं। सबसे आसान score। जैसे queue log में office और hour हैं, तो score 2।",
"h": "02-retrieval-dense.html#w-overlap"
},
"w-overlap": {
"t": "Word overlap",
"d": "Query के कितने शब्द passage में भी हैं। सबसे आसान score। जैसे queue log में office और hour हैं, तो score 2।",
"h": "02-retrieval-dense.html#w-overlap"
},
"02-retrieval-dense.html#w-stopwords": {
"t": "Stopwords",
"d": "is, the, which जैसे बहुत आम शब्द, जिन्हें गिनती में नहीं लेते। “which office hour is least crowded” से which और is हटते हैं।",
"h": "02-retrieval-dense.html#w-stopwords"
},
"w-stopwords": {
"t": "Stopwords",
"d": "is, the, which जैसे बहुत आम शब्द, जिन्हें गिनती में नहीं लेते। “which office hour is least crowded” से which और is हटते हैं।",
"h": "02-retrieval-dense.html#w-stopwords"
},
"02-retrieval-dense.html#w-reader": {
"t": "Reader",
"d": "Query और top-K passages पढ़कर जवाब लिखने वाला हिस्सा। आज अक्सर एक LLM। जैसे queue log पढ़कर “Thursday 9am” लिखना।",
"h": "02-retrieval-dense.html#w-reader"
},
"w-reader": {
"t": "Reader",
"d": "Query और top-K passages पढ़कर जवाब लिखने वाला हिस्सा। आज अक्सर एक LLM। जैसे queue log पढ़कर “Thursday 9am” लिखना।",
"h": "02-retrieval-dense.html#w-reader"
},
"02-retrieval-dense.html#w-zeroshot": {
"t": "Zero-shot",
"d": "उस खास काम पर training के बिना, सिर्फ़ instruction पढ़कर काम करना। जैसे prompt में लिखा “Answer the question using the passage below”।",
"h": "02-retrieval-dense.html#w-zeroshot"
},
"w-zeroshot": {
"t": "Zero-shot",
"d": "उस खास काम पर training के बिना, सिर्फ़ instruction पढ़कर काम करना। जैसे prompt में लिखा “Answer the question using the passage below”।",
"h": "02-retrieval-dense.html#w-zeroshot"
},
"02-retrieval-dense.html#w-recall": {
"t": "Recall",
"d": "Retriever कितनी बार ज़रूरी passage ढूँढ पाता है। जैसे 100 सवालों में 60 पर, तो recall 60%।",
"h": "02-retrieval-dense.html#w-recall"
},
"w-recall": {
"t": "Recall",
"d": "Retriever कितनी बार ज़रूरी passage ढूँढ पाता है। जैसे 100 सवालों में 60 पर, तो recall 60%।",
"h": "02-retrieval-dense.html#w-recall"
},
"02-retrieval-dense.html#w-ceiling": {
"t": "Recall ceiling",
"d": "Retriever का recall पूरे system की ऊपरी हद बन जाता है। Recall 60% है, तो reader कितना भी अच्छा हो, 100 में से 60 से ज़्यादा जवाब passages के दम पर नहीं आते।",
"h": "02-retrieval-dense.html#w-ceiling"
},
"w-ceiling": {
"t": "Recall ceiling",
"d": "Retriever का recall पूरे system की ऊपरी हद बन जाता है। Recall 60% है, तो reader कितना भी अच्छा हो, 100 में से 60 से ज़्यादा जवाब passages के दम पर नहीं आते।",
"h": "02-retrieval-dense.html#w-ceiling"
},
"02-retrieval-dense.html#w-readcomp": {
"t": "Reading comprehension",
"d": "दिया हुआ text पढ़कर उसी पर पूछे सवाल का जवाब देना। Retriever के बाद reader का काम यही है। जैसे Ottoman empire वाला paragraph पढ़कर 32 बताना।",
"h": "02-retrieval-dense.html#w-readcomp"
},
"w-readcomp": {
"t": "Reading comprehension",
"d": "दिया हुआ text पढ़कर उसी पर पूछे सवाल का जवाब देना। Retriever के बाद reader का काम यही है। जैसे Ottoman empire वाला paragraph पढ़कर 32 बताना।",
"h": "02-retrieval-dense.html#w-readcomp"
},
"02-retrieval-dense.html#w-squad": {
"t": "SQuAD",
"d": "Stanford Question Answering Dataset: Wikipedia के paragraphs पर लोगों के लिखे सवाल, और जवाब हमेशा paragraph का एक span। जैसे training में 87,599 सवाल।",
"h": "02-retrieval-dense.html#w-squad"
},
"w-squad": {
"t": "SQuAD",
"d": "Stanford Question Answering Dataset: Wikipedia के paragraphs पर लोगों के लिखे सवाल, और जवाब हमेशा paragraph का एक span। जैसे training में 87,599 सवाल।",
"h": "02-retrieval-dense.html#w-squad"
},
"02-retrieval-dense.html#w-opendomain": {
"t": "Open-domain QA",
"d": "किसी भी विषय का सवाल, जिसका paragraph साथ नहीं मिलता, इसलिए system उसे पूरे corpus में खुद ढूँढता है। जैसे DrQA में Warsaw वाला सवाल, पूरे Wikipedia पर।",
"h": "02-retrieval-dense.html#w-opendomain"
},
"w-opendomain": {
"t": "Open-domain QA",
"d": "किसी भी विषय का सवाल, जिसका paragraph साथ नहीं मिलता, इसलिए system उसे पूरे corpus में खुद ढूँढता है। जैसे DrQA में Warsaw वाला सवाल, पूरे Wikipedia पर।",
"h": "02-retrieval-dense.html#w-opendomain"
},
"02-retrieval-dense.html#w-drqa": {
"t": "DrQA",
"d": "2017 का retriever-reader system: fixed TF-IDF retriever पूरे Wikipedia से 5 articles लौटाता है, और neural reader उनमें से एक span चुनता है। जैसे Warsaw वाले सवाल पर 833,500।",
"h": "02-retrieval-dense.html#w-drqa"
},
"w-drqa": {
"t": "DrQA",
"d": "2017 का retriever-reader system: fixed TF-IDF retriever पूरे Wikipedia से 5 articles लौटाता है, और neural reader उनमें से एक span चुनता है। जैसे Warsaw वाले सवाल पर 833,500।",
"h": "02-retrieval-dense.html#w-drqa"
},
"02-retrieval-dense.html#w-bigram": {
"t": "Bigram",
"d": "साथ-साथ आने वाले दो शब्द। जैसे queue log में office hour, और forum post में least crowded।",
"h": "02-retrieval-dense.html#w-bigram"
},
"w-bigram": {
"t": "Bigram",
"d": "साथ-साथ आने वाले दो शब्द। जैसे queue log में office hour, और forum post में least crowded।",
"h": "02-retrieval-dense.html#w-bigram"
},
"02-retrieval-dense.html#w-distant": {
"t": "Distant supervision",
"d": "सिर्फ़ सवाल-जवाब वाले data के लिए paragraph अपने आप ढूँढना: retriever चलाइए, और जिन passages में जवाब का text हूबहू है, उन्हें रखिए। जैसे milestone वाले सवाल पर syllabus।",
"h": "02-retrieval-dense.html#w-distant"
},
"w-distant": {
"t": "Distant supervision",
"d": "सिर्फ़ सवाल-जवाब वाले data के लिए paragraph अपने आप ढूँढना: retriever चलाइए, और जिन passages में जवाब का text हूबहू है, उन्हें रखिए। जैसे milestone वाले सवाल पर syllabus।",
"h": "02-retrieval-dense.html#w-distant"
},
"03-vectors-dense.html#w-vector": {
"t": "Vector",
"d": "तय लंबाई वाली numbers की list, जैसे [0.9, 0.1]। 2 numbers हों, तो plane पर एक तीर।",
"h": "03-vectors-dense.html#w-vector"
},
"w-vector": {
"t": "Vector",
"d": "तय लंबाई वाली numbers की list, जैसे [0.9, 0.1]। 2 numbers हों, तो plane पर एक तीर।",
"h": "03-vectors-dense.html#w-vector"
},
"03-vectors-dense.html#w-dimension": {
"t": "Dimension",
"d": "Vector में कितने numbers हैं। जैसे [0.9, 0.1] का dimension 2 है, और BERT-base के vectors का 768।",
"h": "03-vectors-dense.html#w-dimension"
},
"w-dimension": {
"t": "Dimension",
"d": "Vector में कितने numbers हैं। जैसे [0.9, 0.1] का dimension 2 है, और BERT-base के vectors का 768।",
"h": "03-vectors-dense.html#w-dimension"
},
"03-vectors-dense.html#w-dot": {
"t": "Dot product (inner product)",
"d": "एक ही जगह वाले numbers का गुणा, फिर सबका जोड़। जैसे [0.8, 0.2] और [0.9, 0.1]: 0.72 + 0.02 = 0.74।",
"h": "03-vectors-dense.html#w-dot"
},
"w-dot": {
"t": "Dot product (inner product)",
"d": "एक ही जगह वाले numbers का गुणा, फिर सबका जोड़। जैसे [0.8, 0.2] और [0.9, 0.1]: 0.72 + 0.02 = 0.74।",
"h": "03-vectors-dense.html#w-dot"
},
"03-vectors-dense.html#w-sigma": {
"t": "∑ (sigma)",
"d": "नीचे लिखी range पर जोड़ते जाइए। जैसे i = 1 से 2 तक a<sub>i</sub>b<sub>i</sub> का जोड़, यानी a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub>।",
"h": "03-vectors-dense.html#w-sigma"
},
"w-sigma": {
"t": "∑ (sigma)",
"d": "नीचे लिखी range पर जोड़ते जाइए। जैसे i = 1 से 2 तक a<sub>i</sub>b<sub>i</sub> का जोड़, यानी a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub>।",
"h": "03-vectors-dense.html#w-sigma"
},
"03-vectors-dense.html#w-length": {
"t": "Length",
"d": "तीर की लंबाई: हर number का square, उनका जोड़, फिर square root। जैसे [0.8, 0.2] की length √(0.64 + 0.04) = 0.82।",
"h": "03-vectors-dense.html#w-length"
},
"w-length": {
"t": "Length",
"d": "तीर की लंबाई: हर number का square, उनका जोड़, फिर square root। जैसे [0.8, 0.2] की length √(0.64 + 0.04) = 0.82।",
"h": "03-vectors-dense.html#w-length"
},
"03-vectors-dense.html#w-cosine": {
"t": "Cosine similarity",
"d": "Dot product ÷ दोनों lengths का गुणा। सिर्फ़ दिशा देखता है, −1 से 1 के बीच। जैसे 0.74 ÷ (0.82 × 0.91) = 0.99।",
"h": "03-vectors-dense.html#w-cosine"
},
"w-cosine": {
"t": "Cosine similarity",
"d": "Dot product ÷ दोनों lengths का गुणा। सिर्फ़ दिशा देखता है, −1 से 1 के बीच। जैसे 0.74 ÷ (0.82 × 0.91) = 0.99।",
"h": "03-vectors-dense.html#w-cosine"
},
"03-vectors-dense.html#w-normalize": {
"t": "Normalize",
"d": "Vector के हर number को उसकी length से भाग देकर length 1 बनाना। दिशा वही रहती है। जैसे [0.8, 0.2] ÷ 0.82 = [0.97, 0.24]।",
"h": "03-vectors-dense.html#w-normalize"
},
"w-normalize": {
"t": "Normalize",
"d": "Vector के हर number को उसकी length से भाग देकर length 1 बनाना। दिशा वही रहती है। जैसे [0.8, 0.2] ÷ 0.82 = [0.97, 0.24]।",
"h": "03-vectors-dense.html#w-normalize"
},
"03-vectors-dense.html#w-embedding": {
"t": "Embedding",
"d": "Trained model से बना text का vector। मिलती-जुलती बात वाले texts की दिशा मिलती-जुलती होती है, जैसे “help from a TA” और “run by the TAs”।",
"h": "03-vectors-dense.html#w-embedding"
},
"w-embedding": {
"t": "Embedding",
"d": "Trained model से बना text का vector। मिलती-जुलती बात वाले texts की दिशा मिलती-जुलती होती है, जैसे “help from a TA” और “run by the TAs”।",
"h": "03-vectors-dense.html#w-embedding"
},
"03-vectors-dense.html#w-encoder": {
"t": "Embedding model (encoder)",
"d": "Text पढ़कर तय लंबाई का embedding बनाने वाला model। जैसे query को [0.8, 0.2] जैसा vector देना।",
"h": "03-vectors-dense.html#w-encoder"
},
"w-encoder": {
"t": "Embedding model (encoder)",
"d": "Text पढ़कर तय लंबाई का embedding बनाने वाला model। जैसे query को [0.8, 0.2] जैसा vector देना।",
"h": "03-vectors-dense.html#w-encoder"
},
"03-vectors-dense.html#w-index": {
"t": "Index",
"d": "Passages के पहले से बनाकर रखे embeddings की list। जैसे 60,000 passages के 60,000 vectors।",
"h": "03-vectors-dense.html#w-index"
},
"w-index": {
"t": "Index",
"d": "Passages के पहले से बनाकर रखे embeddings की list। जैसे 60,000 passages के 60,000 vectors।",
"h": "03-vectors-dense.html#w-index"
},
"03-vectors-dense.html#w-offline": {
"t": "Offline और online",
"d": "Offline: query आने से पहले, एक बार, जैसे passages के embeddings बनाना। Online: हर query पर, जैसे query का embedding।",
"h": "03-vectors-dense.html#w-offline"
},
"w-offline": {
"t": "Offline और online",
"d": "Offline: query आने से पहले, एक बार, जैसे passages के embeddings बनाना। Online: हर query पर, जैसे query का embedding।",
"h": "03-vectors-dense.html#w-offline"
},
"03-vectors-dense.html#w-matrix": {
"t": "Matrix और matrix-vector गुणा",
"d": "Rows और columns वाली numbers की table, और उसकी हर row का किसी vector से dot product। जैसे हमारा 4 × 2 index गुणा query [0.8, 0.2] = [0.74, 0.26, 0.32, 1.56]।",
"h": "03-vectors-dense.html#w-matrix"
},
"w-matrix": {
"t": "Matrix और matrix-vector गुणा",
"d": "Rows और columns वाली numbers की table, और उसकी हर row का किसी vector से dot product। जैसे हमारा 4 × 2 index गुणा query [0.8, 0.2] = [0.74, 0.26, 0.32, 1.56]।",
"h": "03-vectors-dense.html#w-matrix"
},
"03-vectors-dense.html#w-decomposable": {
"t": "Decomposable similarity",
"d": "ऐसा score, जो सवाल के vector और passage के vector से निकले, और passage का vector सवाल देखे बिना बने। तभी offline index बन सकता है। जैसे dot product, cosine और दूरी।",
"h": "03-vectors-dense.html#w-decomposable"
},
"w-decomposable": {
"t": "Decomposable similarity",
"d": "ऐसा score, जो सवाल के vector और passage के vector से निकले, और passage का vector सवाल देखे बिना बने। तभी offline index बन सकता है। जैसे dot product, cosine और दूरी।",
"h": "03-vectors-dense.html#w-decomposable"
},
"04-probability-tools-dense.html#w-conditional": {
"t": "Conditional probability, p(A|B)",
"d": "B पता हो, तो A की probability। “|” को “given” पढ़िए। जैसे p(भरा | Tuesday) = 16 ÷ 20 = 0.80।",
"h": "04-probability-tools-dense.html#w-conditional"
},
"w-conditional": {
"t": "Conditional probability, p(A|B)",
"d": "B पता हो, तो A की probability। “|” को “given” पढ़िए। जैसे p(भरा | Tuesday) = 16 ÷ 20 = 0.80।",
"h": "04-probability-tools-dense.html#w-conditional"
},
"04-probability-tools-dense.html#w-chain": {
"t": "Chain rule (probability वाला)",
"d": "p(A और B) = p(A) × p(B|A)। कई steps हों, तो सबका गुणा। जैसे p(Tuesday) × p(भरा | Tuesday) = 0.5 × 0.8 = 0.40। Lesson 12 का दरों वाला chain rule इससे अलग है।",
"h": "04-probability-tools-dense.html#w-chain"
},
"w-chain": {
"t": "Chain rule (probability वाला)",
"d": "p(A और B) = p(A) × p(B|A)। कई steps हों, तो सबका गुणा। जैसे p(Tuesday) × p(भरा | Tuesday) = 0.5 × 0.8 = 0.40। Lesson 12 का दरों वाला chain rule इससे अलग है।",
"h": "04-probability-tools-dense.html#w-chain"
},
"04-probability-tools-dense.html#w-prod": {
"t": "∏ (capital pi)",
"d": "नीचे लिखी range पर सबका गुणा। जैसे तीन tokens पर 0.21 × 0.31 × 0.71 = 0.046।",
"h": "04-probability-tools-dense.html#w-prod"
},
"w-prod": {
"t": "∏ (capital pi)",
"d": "नीचे लिखी range पर सबका गुणा। जैसे तीन tokens पर 0.21 × 0.31 × 0.71 = 0.046।",
"h": "04-probability-tools-dense.html#w-prod"
},
"04-probability-tools-dense.html#w-marginal": {
"t": "Marginalization",
"d": "हर case का वज़न गुणा उस case में probability, फिर सारे cases का जोड़। जैसे 0.5 × 0.8 + 0.5 × 0.1 = 0.45।",
"h": "04-probability-tools-dense.html#w-marginal"
},
"w-marginal": {
"t": "Marginalization",
"d": "हर case का वज़न गुणा उस case में probability, फिर सारे cases का जोड़। जैसे 0.5 × 0.8 + 0.5 × 0.1 = 0.45।",
"h": "04-probability-tools-dense.html#w-marginal"
},
"04-probability-tools-dense.html#w-approx": {
"t": "≈",
"d": "करीब बराबर। RAG के formula में सिर्फ़ top-K passages जुड़ते हैं, इसलिए जोड़ “करीब” बराबर है।",
"h": "04-probability-tools-dense.html#w-approx"
},
"w-approx": {
"t": "≈",
"d": "करीब बराबर। RAG के formula में सिर्फ़ top-K passages जुड़ते हैं, इसलिए जोड़ “करीब” बराबर है।",
"h": "04-probability-tools-dense.html#w-approx"
},
"04-probability-tools-dense.html#w-exp": {
"t": "exp और e",
"d": "exp(s) = e<sup>s</sup>, जहाँ e करीब 2.718 है। हमेशा 0 से बड़ा, और e<sup>a+1</sup> = e<sup>a</sup> × e। जैसे exp(1) = 2.718, exp(0) = 1, exp(−1) = 0.368।",
"h": "04-probability-tools-dense.html#w-exp"
},
"w-exp": {
"t": "exp और e",
"d": "exp(s) = e<sup>s</sup>, जहाँ e करीब 2.718 है। हमेशा 0 से बड़ा, और e<sup>a+1</sup> = e<sup>a</sup> × e। जैसे exp(1) = 2.718, exp(0) = 1, exp(−1) = 0.368।",
"h": "04-probability-tools-dense.html#w-exp"
},
"04-probability-tools-dense.html#w-softmax": {
"t": "Softmax",
"d": "हर score का exp, फिर सबके जोड़ से भाग। Scores को probabilities बनाता है। जैसे 2.0, 1.0, 0.1 से 0.659, 0.242, 0.099।",
"h": "04-probability-tools-dense.html#w-softmax"
},
"w-softmax": {
"t": "Softmax",
"d": "हर score का exp, फिर सबके जोड़ से भाग। Scores को probabilities बनाता है। जैसे 2.0, 1.0, 0.1 से 0.659, 0.242, 0.099।",
"h": "04-probability-tools-dense.html#w-softmax"
},
"04-probability-tools-dense.html#w-propto": {
"t": "∝",
"d": "के अनुपात में। आख़िर में सबको एक ही number से ऐसे भाग दीजिए कि जोड़ 1 हो। जैसे exps 2.718 और 1 से 0.731 और 0.269।",
"h": "04-probability-tools-dense.html#w-propto"
},
"w-propto": {
"t": "∝",
"d": "के अनुपात में। आख़िर में सबको एक ही number से ऐसे भाग दीजिए कि जोड़ 1 हो। जैसे exps 2.718 और 1 से 0.731 और 0.269।",
"h": "04-probability-tools-dense.html#w-propto"
},
"04-probability-tools-dense.html#w-transpose": {
"t": "d<sup>⊤</sup>q",
"d": "Vectors d और q का dot product लिखने का एक तरीका। जैसे office hours page [0.9, 0.1] और सवाल [0.8, 0.2] पर 0.74।",
"h": "04-probability-tools-dense.html#w-transpose"
},
"w-transpose": {
"t": "d<sup>⊤</sup>q",
"d": "Vectors d और q का dot product लिखने का एक तरीका। जैसे office hours page [0.9, 0.1] और सवाल [0.8, 0.2] पर 0.74।",
"h": "04-probability-tools-dense.html#w-transpose"
},
"04-probability-tools-dense.html#w-ln": {
"t": "Natural log, ln",
"d": "e को किस power तक उठाएँ कि x मिले। ln(e<sup>x</sup>) = x, और ln(a × b) = ln a + ln b। जैसे ln(0.1) = −2.303।",
"h": "04-probability-tools-dense.html#w-ln"
},
"w-ln": {
"t": "Natural log, ln",
"d": "e को किस power तक उठाएँ कि x मिले। ln(e<sup>x</sup>) = x, और ln(a × b) = ln a + ln b। जैसे ln(0.1) = −2.303।",
"h": "04-probability-tools-dense.html#w-ln"
},
"04-probability-tools-dense.html#w-loss": {
"t": "Loss",
"d": "Model कितना गलत है, उसका number। Training इसे छोटा करती है। जैसे सही जवाब की probability 0.5 हो, तो loss −ln 0.5 = 0.693।",
"h": "04-probability-tools-dense.html#w-loss"
},
"w-loss": {
"t": "Loss",
"d": "Model कितना गलत है, उसका number। Training इसे छोटा करती है। जैसे सही जवाब की probability 0.5 हो, तो loss −ln 0.5 = 0.693।",
"h": "04-probability-tools-dense.html#w-loss"
},
"04-probability-tools-dense.html#w-likelihood": {
"t": "Likelihood",
"d": "Model ने सही data को जो probability दी। जैसे सही जवाब को 0.12 दिया, तो likelihood 0.12।",
"h": "04-probability-tools-dense.html#w-likelihood"
},
"w-likelihood": {
"t": "Likelihood",
"d": "Model ने सही data को जो probability दी। जैसे सही जवाब को 0.12 दिया, तो likelihood 0.12।",
"h": "04-probability-tools-dense.html#w-likelihood"
},
"04-probability-tools-dense.html#w-nll": {
"t": "Negative log-likelihood",
"d": "−ln p(सही जवाब)। सबसे आम loss। जैसे p = 0.12 पर −ln 0.12 = 2.120।",
"h": "04-probability-tools-dense.html#w-nll"
},
"w-nll": {
"t": "Negative log-likelihood",
"d": "−ln p(सही जवाब)। सबसे आम loss। जैसे p = 0.12 पर −ln 0.12 = 2.120।",
"h": "04-probability-tools-dense.html#w-nll"
},
"04-probability-tools-dense.html#w-gradient": {
"t": "Gradient",
"d": "हर parameter को किस दिशा में और कितना बदलें कि loss घटे, उसका हिसाब। जैसे lesson 1 में training ने parameters को उस दिशा में बदला, जिसमें Thursday की probability 0.10 से 0.12 हुई और loss 2.303 से 2.120।",
"h": "04-probability-tools-dense.html#w-gradient"
},
"w-gradient": {
"t": "Gradient",
"d": "हर parameter को किस दिशा में और कितना बदलें कि loss घटे, उसका हिसाब। जैसे lesson 1 में training ने parameters को उस दिशा में बदला, जिसमें Thursday की probability 0.10 से 0.12 हुई और loss 2.303 से 2.120।",
"h": "04-probability-tools-dense.html#w-gradient"
},
"04-probability-tools-dense.html#w-normalizer": {
"t": "Normalizer, Z",
"d": "Softmax में सारे exps का जोड़, जिससे भाग देने पर वज़नों का जोड़ 1 होता है। ∝ के पीछे यही भाग छिपा है। जैसे exps 2.718 और 1 पर Z = 3.718।",
"h": "04-probability-tools-dense.html#w-normalizer"
},
"w-normalizer": {
"t": "Normalizer, Z",
"d": "Softmax में सारे exps का जोड़, जिससे भाग देने पर वज़नों का जोड़ 1 होता है। ∝ के पीछे यही भाग छिपा है। जैसे exps 2.718 और 1 पर Z = 3.718।",
"h": "04-probability-tools-dense.html#w-normalizer"
},
"04-probability-tools-dense.html#w-colvec": {
"t": "Column vector और ⊤",
"d": "Column vector के numbers ऊपर-नीचे लिखे होते हैं, और ⊤ (transpose) उसे row बना देता है। Row गुणा column dot product है। जैसे row [0.9, 0.1] गुणा column [0.8, 0.2] = 0.74।",
"h": "04-probability-tools-dense.html#w-colvec"
},
"w-colvec": {
"t": "Column vector और ⊤",
"d": "Column vector के numbers ऊपर-नीचे लिखे होते हैं, और ⊤ (transpose) उसे row बना देता है। Row गुणा column dot product है। जैसे row [0.9, 0.1] गुणा column [0.8, 0.2] = 0.74।",
"h": "04-probability-tools-dense.html#w-colvec"
},
"04-probability-tools-dense.html#w-increasing": {
"t": "Increasing function",
"d": "ऐसा function, जिसमें बड़ा input हमेशा बड़ा output देता है, इसलिए क्रम नहीं बदलता। exp और ln ऐसे हैं। जैसे scores 1.56 और 0.74 से वज़न 0.499 और 0.220, उसी क्रम में।",
"h": "04-probability-tools-dense.html#w-increasing"
},
"w-increasing": {
"t": "Increasing function",
"d": "ऐसा function, जिसमें बड़ा input हमेशा बड़ा output देता है, इसलिए क्रम नहीं बदलता। exp और ln ऐसे हैं। जैसे scores 1.56 और 0.74 से वज़न 0.499 और 0.220, उसी क्रम में।",
"h": "04-probability-tools-dense.html#w-increasing"
},
"04-probability-tools-dense.html#w-nmll": {
"t": "Negative marginal log-likelihood",
"d": "सही जवाब की probability का −ln, जब वो probability passages पर marginalization से बनी हो, और सारे examples पर उसका जोड़। RAG का training loss। जैसे दो examples पर 0.378 + 0.693 = 1.071।",
"h": "04-probability-tools-dense.html#w-nmll"
},
"w-nmll": {
"t": "Negative marginal log-likelihood",
"d": "सही जवाब की probability का −ln, जब वो probability passages पर marginalization से बनी हो, और सारे examples पर उसका जोड़। RAG का training loss। जैसे दो examples पर 0.378 + 0.693 = 1.071।",
"h": "04-probability-tools-dense.html#w-nmll"
},
"05-rag-model-dense.html#w-rag": {
"t": "RAG",
"d": "Retrieval-Augmented Generation: retriever और generator को एक model में जोड़कर एक ही loss से साथ train करना। जैसे queue log लाकर उससे <q>Thursday 9am</q> लिखना।",
"h": "05-rag-model-dense.html#w-rag"
},
"w-rag": {
"t": "RAG",
"d": "Retrieval-Augmented Generation: retriever और generator को एक model में जोड़कर एक ही loss से साथ train करना। जैसे queue log लाकर उससे <q>Thursday 9am</q> लिखना।",
"h": "05-rag-model-dense.html#w-rag"
},
"05-rag-model-dense.html#w-latent": {
"t": "Latent variable",
"d": "छिपा हुआ choice, जो data में नहीं लिखा। RAG में ये choice है कि जवाब किस passage से आया। जैसे सवाल-जवाब के जोड़े में ये नहीं लिखा कि जवाब queue log से आया।",
"h": "05-rag-model-dense.html#w-latent"
},
"w-latent": {
"t": "Latent variable",
"d": "छिपा हुआ choice, जो data में नहीं लिखा। RAG में ये choice है कि जवाब किस passage से आया। जैसे सवाल-जवाब के जोड़े में ये नहीं लिखा कि जवाब queue log से आया।",
"h": "05-rag-model-dense.html#w-latent"
},
"05-rag-model-dense.html#w-eta-theta": {
"t": "η और θ",
"d": "Retriever (eta) और generator (theta) के parameters के नाम। इसीलिए retriever को p<sub>η</sub>(z|x) लिखते हैं, और generator को p<sub>θ</sub>(y|x, z)।",
"h": "05-rag-model-dense.html#w-eta-theta"
},
"w-eta-theta": {
"t": "η और θ",
"d": "Retriever (eta) और generator (theta) के parameters के नाम। इसीलिए retriever को p<sub>η</sub>(z|x) लिखते हैं, और generator को p<sub>θ</sub>(y|x, z)।",
"h": "05-rag-model-dense.html#w-eta-theta"
},
"05-rag-model-dense.html#w-bert": {
"t": "BERT",
"d": "Google का 2018 का encoder model। RAG के retriever के दोनों encoders, query encoder और passage encoder, इसी से बने हैं।",
"h": "05-rag-model-dense.html#w-bert"
},
"w-bert": {
"t": "BERT",
"d": "Google का 2018 का encoder model। RAG के retriever के दोनों encoders, query encoder और passage encoder, इसी से बने हैं।",
"h": "05-rag-model-dense.html#w-bert"
},
"05-rag-model-dense.html#w-mips": {
"t": "MIPS",
"d": "Maximum inner product search: index में सबसे बड़े dot product वाले K passages ढूँढना। जैसे 2.1 करोड़ passages में से सबसे ऊँचे 5 scores वाले passages।",
"h": "05-rag-model-dense.html#w-mips"
},
"w-mips": {
"t": "MIPS",
"d": "Maximum inner product search: index में सबसे बड़े dot product वाले K passages ढूँढना। जैसे 2.1 करोड़ passages में से सबसे ऊँचे 5 scores वाले passages।",
"h": "05-rag-model-dense.html#w-mips"
},
"05-rag-model-dense.html#w-generator": {
"t": "Generator",
"d": "सवाल और एक passage पढ़कर जवाब लिखने वाला model, p<sub>θ</sub>(y|x, z)। RAG में ये BART है। जैसे queue log के साथ <q>Thursday 9am</q> को 0.9।",
"h": "05-rag-model-dense.html#w-generator"
},
"w-generator": {
"t": "Generator",
"d": "सवाल और एक passage पढ़कर जवाब लिखने वाला model, p<sub>θ</sub>(y|x, z)। RAG में ये BART है। जैसे queue log के साथ <q>Thursday 9am</q> को 0.9।",
"h": "05-rag-model-dense.html#w-generator"
},
"05-rag-model-dense.html#w-encdec": {
"t": "Encoder-decoder",
"d": "Encoder input के vectors बनाता है, और decoder उन्हें देखकर एक-एक token लिखता है। BART ऐसा model है।",
"h": "05-rag-model-dense.html#w-encdec"
},
"w-encdec": {
"t": "Encoder-decoder",
"d": "Encoder input के vectors बनाता है, और decoder उन्हें देखकर एक-एक token लिखता है। BART ऐसा model है।",
"h": "05-rag-model-dense.html#w-encdec"
},
"05-rag-model-dense.html#w-concat": {
"t": "Concatenate",
"d": "दो texts को आगे-पीछे जोड़कर एक text बनाना। जैसे <q>question: …</q> के बाद <q>passage: …</q> जोड़ना।",
"h": "05-rag-model-dense.html#w-concat"
},
"w-concat": {
"t": "Concatenate",
"d": "दो texts को आगे-पीछे जोड़कर एक text बनाना। जैसे <q>question: …</q> के बाद <q>passage: …</q> जोड़ना।",
"h": "05-rag-model-dense.html#w-concat"
},
"05-rag-model-dense.html#w-ragseq": {
"t": "RAG-Sequence",
"d": "हर passage के साथ पूरा जवाब, फिर वज़न वाला जोड़। जैसे 0.6 × 0.18 + 0.4 × 0.45 = 0.288।",
"h": "05-rag-model-dense.html#w-ragseq"
},
"w-ragseq": {
"t": "RAG-Sequence",
"d": "हर passage के साथ पूरा जवाब, फिर वज़न वाला जोड़। जैसे 0.6 × 0.18 + 0.4 × 0.45 = 0.288।",
"h": "05-rag-model-dense.html#w-ragseq"
},
"05-rag-model-dense.html#w-ragtok": {
"t": "RAG-Token",
"d": "हर token पर वज़न वाला जोड़, फिर tokens का गुणा। जैसे 0.74 × 0.48 = 0.355।",
"h": "05-rag-model-dense.html#w-ragtok"
},
"w-ragtok": {
"t": "RAG-Token",
"d": "हर token पर वज़न वाला जोड़, फिर tokens का गुणा। जैसे 0.74 × 0.48 = 0.355।",
"h": "05-rag-model-dense.html#w-ragtok"
},
"05-rag-model-dense.html#w-e2e": {
"t": "End-to-end training",
"d": "एक ही loss से सारे हिस्सों को साथ train करना। RAG में query encoder और generator, दोनों उसी −ln p(y|x) से सीखते हैं। जैसे −ln 0.70 = 0.357।",
"h": "05-rag-model-dense.html#w-e2e"
},
"w-e2e": {
"t": "End-to-end training",
"d": "एक ही loss से सारे हिस्सों को साथ train करना। RAG में query encoder और generator, दोनों उसी −ln p(y|x) से सीखते हैं। जैसे −ln 0.70 = 0.357।",
"h": "05-rag-model-dense.html#w-e2e"
},
"05-rag-model-dense.html#w-backprop": {
"t": "Backpropagation",
"d": "Loss से पीछे की तरफ़ चलकर हर parameter का gradient निकालने का तरीका, छोटे में backprop। RAG में ये generator और query encoder तक जाता है, passage encoder तक नहीं।",
"h": "05-rag-model-dense.html#w-backprop"
},
"w-backprop": {
"t": "Backpropagation",
"d": "Loss से पीछे की तरफ़ चलकर हर parameter का gradient निकालने का तरीका, छोटे में backprop। RAG में ये generator और query encoder तक जाता है, passage encoder तक नहीं।",
"h": "05-rag-model-dense.html#w-backprop"
},
"05-rag-model-dense.html#w-em": {
"t": "Exact Match",
"d": "जवाब सही जवाब से हूबहू मिले, तभी सही। Score ऐसे सवालों का % है। जैसे NQ पर RAG-Sequence का 44.5।",
"h": "05-rag-model-dense.html#w-em"
},
"w-em": {
"t": "Exact Match",
"d": "जवाब सही जवाब से हूबहू मिले, तभी सही। Score ऐसे सवालों का % है। जैसे NQ पर RAG-Sequence का 44.5।",
"h": "05-rag-model-dense.html#w-em"
},
"05-rag-model-dense.html#w-closed": {
"t": "Closed book और open book",
"d": "सिर्फ़ parameters से जवाब, या पहले documents में ढूँढकर जवाब। जैसे NQ पर closed book T5-11B 34.5, और open book RAG-Sequence 44.5।",
"h": "05-rag-model-dense.html#w-closed"
},
"w-closed": {
"t": "Closed book और open book",
"d": "सिर्फ़ parameters से जवाब, या पहले documents में ढूँढकर जवाब। जैसे NQ पर closed book T5-11B 34.5, और open book RAG-Sequence 44.5।",
"h": "05-rag-model-dense.html#w-closed"
},
"05-rag-model-dense.html#w-posterior": {
"t": "Posterior और prior",
"d": "Prior p<sub>η</sub>(z|x) जवाब देखने से पहले passage का वज़न है। Posterior p(z|x, y) जवाब देखने के बाद का वज़न है, यानी कुल chance में उस passage का हिस्सा। जैसे queue log का prior 0.602 है, और posterior 0.773।",
"h": "05-rag-model-dense.html#w-posterior"
},
"w-posterior": {
"t": "Posterior और prior",
"d": "Prior p<sub>η</sub>(z|x) जवाब देखने से पहले passage का वज़न है। Posterior p(z|x, y) जवाब देखने के बाद का वज़न है, यानी कुल chance में उस passage का हिस्सा। जैसे queue log का prior 0.602 है, और posterior 0.773।",
"h": "05-rag-model-dense.html#w-posterior"
},
"05-rag-model-dense.html#w-ablation": {
"t": "Ablation",
"d": "Model का एक हिस्सा हटाकर या रोककर दोबारा नापना, ताकि उस हिस्से का असर दिखे। जैसे RAG-Sequence में query encoder रोकने पर NQ (dev) 44.0 से 41.2 पर आता है।",
"h": "05-rag-model-dense.html#w-ablation"
},
"w-ablation": {
"t": "Ablation",
"d": "Model का एक हिस्सा हटाकर या रोककर दोबारा नापना, ताकि उस हिस्से का असर दिखे। जैसे RAG-Sequence में query encoder रोकने पर NQ (dev) 44.0 से 41.2 पर आता है।",
"h": "05-rag-model-dense.html#w-ablation"
},
"05-rag-model-dense.html#w-thorough": {
"t": "Thorough और Fast decoding",
"d": "RAG-Sequence से जवाब लिखने के दो तरीके। हर passage के साथ एक उम्मीदवार बनता है। Thorough हर उम्मीदवार को हर passage के साथ जाँचता है, और Fast सिर्फ़ वहीं, जहाँ वो बना। जैसे NQ पर 50 passages के साथ Thorough में करीब 2,500 generator runs तक।",
"h": "05-rag-model-dense.html#w-thorough"
},
"w-thorough": {
"t": "Thorough और Fast decoding",
"d": "RAG-Sequence से जवाब लिखने के दो तरीके। हर passage के साथ एक उम्मीदवार बनता है। Thorough हर उम्मीदवार को हर passage के साथ जाँचता है, और Fast सिर्फ़ वहीं, जहाँ वो बना। जैसे NQ पर 50 passages के साथ Thorough में करीब 2,500 generator runs तक।",
"h": "05-rag-model-dense.html#w-thorough"
},
"05-rag-model-dense.html#w-collapse": {
"t": "Retrieval collapse",
"d": "Training में retriever का हर सवाल पर वही passages लाने लगना, जिसके बाद generator उन्हें अनदेखा करना सीख लेता है। जैसे paper में कहानी लिखने वाले काम पर।",
"h": "05-rag-model-dense.html#w-collapse"
},
"w-collapse": {
"t": "Retrieval collapse",
"d": "Training में retriever का हर सवाल पर वही passages लाने लगना, जिसके बाद generator उन्हें अनदेखा करना सीख लेता है। जैसे paper में कहानी लिखने वाले काम पर।",
"h": "05-rag-model-dense.html#w-collapse"
},
"06-rag-pipeline-dense.html#w-frozen": {
"t": "Frozen LLM",
"d": "जिसके parameters आप नहीं बदल सकते, सिर्फ़ prompt भेज सकते हैं। जैसे GPT या Gemini, जो आप API से लेते हैं।",
"h": "06-rag-pipeline-dense.html#w-frozen"
},
"w-frozen": {
"t": "Frozen LLM",
"d": "जिसके parameters आप नहीं बदल सकते, सिर्फ़ prompt भेज सकते हैं। जैसे GPT या Gemini, जो आप API से लेते हैं।",
"h": "06-rag-pipeline-dense.html#w-frozen"
},
"06-rag-pipeline-dense.html#w-pipeline": {
"t": "Pipeline",
"d": "Steps की line, जिसमें हर step का output अगले का input है। जैसे Retrieve का output top-K passages हैं, और वही Read का input।",
"h": "06-rag-pipeline-dense.html#w-pipeline"
},
"w-pipeline": {
"t": "Pipeline",
"d": "Steps की line, जिसमें हर step का output अगले का input है। जैसे Retrieve का output top-K passages हैं, और वही Read का input।",
"h": "06-rag-pipeline-dense.html#w-pipeline"
},
"06-rag-pipeline-dense.html#w-naive": {
"t": "Naive RAG",
"d": "सबसे सीधी pipeline: index, फिर हर query पर Retrieve और Read। बीच में कोई extra step नहीं।",
"h": "06-rag-pipeline-dense.html#w-naive"
},
"w-naive": {
"t": "Naive RAG",
"d": "सबसे सीधी pipeline: index, फिर हर query पर Retrieve और Read। बीच में कोई extra step नहीं।",
"h": "06-rag-pipeline-dense.html#w-naive"
},
"06-rag-pipeline-dense.html#w-indexing": {
"t": "Indexing time और query time",
"d": "एक बार चलने वाले steps, और हर query पर चलने वाले steps। जैसे 60,000 passages के embeddings एक बार बनते हैं, और query का embedding हर बार।",
"h": "06-rag-pipeline-dense.html#w-indexing"
},
"w-indexing": {
"t": "Indexing time और query time",
"d": "एक बार चलने वाले steps, और हर query पर चलने वाले steps। जैसे 60,000 passages के embeddings एक बार बनते हैं, और query का embedding हर बार।",
"h": "06-rag-pipeline-dense.html#w-indexing"
},
"06-rag-pipeline-dense.html#w-pre": {
"t": "Pre-retrieval",
"d": "Retrieval से पहले query सुधारने वाले steps: routing, rewriting और expansion।",
"h": "06-rag-pipeline-dense.html#w-pre"
},
"w-pre": {
"t": "Pre-retrieval",
"d": "Retrieval से पहले query सुधारने वाले steps: routing, rewriting और expansion।",
"h": "06-rag-pipeline-dense.html#w-pre"
},
"06-rag-pipeline-dense.html#w-routing": {
"t": "Query routing",
"d": "तय करना कि किस index या source में ढूँढना है। जैसे “when is the project milestone due” syllabus वाले index में जाए।",
"h": "06-rag-pipeline-dense.html#w-routing"
},
"w-routing": {
"t": "Query routing",
"d": "तय करना कि किस index या source में ढूँढना है। जैसे “when is the project milestone due” syllabus वाले index में जाए।",
"h": "06-rag-pipeline-dense.html#w-routing"
},
"06-rag-pipeline-dense.html#w-rewriting": {
"t": "Query rewriting",
"d": "LLM से query को साफ़ search query में बदलवाना। जैसे “OH timings?” से “CS 329Z office hours schedule”।",
"h": "06-rag-pipeline-dense.html#w-rewriting"
},
"w-rewriting": {
"t": "Query rewriting",
"d": "LLM से query को साफ़ search query में बदलवाना। जैसे “OH timings?” से “CS 329Z office hours schedule”।",
"h": "06-rag-pipeline-dense.html#w-rewriting"
},
"06-rag-pipeline-dense.html#w-expansion": {
"t": "Query expansion",
"d": "Query में जुड़े हुए शब्द या दूसरे रूप जोड़ना। जैसे “help ta” में “office hours” जोड़ने से office hours page का score 0 से 2 होता है।",
"h": "06-rag-pipeline-dense.html#w-expansion"
},
"w-expansion": {
"t": "Query expansion",
"d": "Query में जुड़े हुए शब्द या दूसरे रूप जोड़ना। जैसे “help ta” में “office hours” जोड़ने से office hours page का score 0 से 2 होता है।",
"h": "06-rag-pipeline-dense.html#w-expansion"
},
"06-rag-pipeline-dense.html#w-post": {
"t": "Post-retrieval",
"d": "Retrieval के बाद लौटी list सुधारने वाले steps: rerank, summary और fusion।",
"h": "06-rag-pipeline-dense.html#w-post"
},
"w-post": {
"t": "Post-retrieval",
"d": "Retrieval के बाद लौटी list सुधारने वाले steps: rerank, summary और fusion।",
"h": "06-rag-pipeline-dense.html#w-post"
},
"06-rag-pipeline-dense.html#w-rerank": {
"t": "Rerank और reranker",
"d": "धीमा लेकिन सटीक model, जो लौटाए गए passages को दोबारा sort करता है। जैसे queue log और forum post के बराबर score में से forum post को नीचे भेजना।",
"h": "06-rag-pipeline-dense.html#w-rerank"
},
"w-rerank": {
"t": "Rerank और reranker",
"d": "धीमा लेकिन सटीक model, जो लौटाए गए passages को दोबारा sort करता है। जैसे queue log और forum post के बराबर score में से forum post को नीचे भेजना।",
"h": "06-rag-pipeline-dense.html#w-rerank"
},
"06-rag-pipeline-dense.html#w-summary": {
"t": "Summary",
"d": "Passages को prompt से पहले छोटा करना। जैसे 500 tokens का passage 100 का हो, तो 14 passages 7,000 की जगह 1,400 tokens लेते हैं। खतरा: Room 104 जैसी detail छूट सकती है।",
"h": "06-rag-pipeline-dense.html#w-summary"
},
"w-summary": {
"t": "Summary",
"d": "Passages को prompt से पहले छोटा करना। जैसे 500 tokens का passage 100 का हो, तो 14 passages 7,000 की जगह 1,400 tokens लेते हैं। खतरा: Room 104 जैसी detail छूट सकती है।",
"h": "06-rag-pipeline-dense.html#w-summary"
},
"06-rag-pipeline-dense.html#w-fusion": {
"t": "Fusion",
"d": "कई ranked lists को मिलाकर एक list बनाना। जैसे पहली list queue log, forum post, office hours page है, और दूसरी office hours page, queue log। जो दोनों में हैं, वो ऊपर आते हैं।",
"h": "06-rag-pipeline-dense.html#w-fusion"
},
"w-fusion": {
"t": "Fusion",
"d": "कई ranked lists को मिलाकर एक list बनाना। जैसे पहली list queue log, forum post, office hours page है, और दूसरी office hours page, queue log। जो दोनों में हैं, वो ऊपर आते हैं।",
"h": "06-rag-pipeline-dense.html#w-fusion"
},
"06-rag-pipeline-dense.html#w-advanced": {
"t": "Advanced RAG",
"d": "Naive RAG में pre-retrieval और post-retrieval steps जोड़कर बनी pipeline। जैसे Rewrite, Retrieve, Rerank, Read।",
"h": "06-rag-pipeline-dense.html#w-advanced"
},
"w-advanced": {
"t": "Advanced RAG",
"d": "Naive RAG में pre-retrieval और post-retrieval steps जोड़कर बनी pipeline। जैसे Rewrite, Retrieve, Rerank, Read।",
"h": "06-rag-pipeline-dense.html#w-advanced"
},
"06-rag-pipeline-dense.html#w-modular": {
"t": "Modular RAG",
"d": "Pipeline को modules में बाँटकर, उन्हें अलग-अलग क्रम में जोड़ना। जैसे Retrieve, Read, Retrieve, Read।",
"h": "06-rag-pipeline-dense.html#w-modular"
},
"w-modular": {
"t": "Modular RAG",
"d": "Pipeline को modules में बाँटकर, उन्हें अलग-अलग क्रम में जोड़ना। जैसे Retrieve, Read, Retrieve, Read।",
"h": "06-rag-pipeline-dense.html#w-modular"
},
"06-rag-pipeline-dense.html#w-pattern": {
"t": "Pattern",
"d": "Modules का एक तय क्रम, जैसे Retrieve, Read।",
"h": "06-rag-pipeline-dense.html#w-pattern"
},
"w-pattern": {
"t": "Pattern",
"d": "Modules का एक तय क्रम, जैसे Retrieve, Read।",
"h": "06-rag-pipeline-dense.html#w-pattern"
},
"06-rag-pipeline-dense.html#w-demos": {
"t": "Demonstrations (few-shot)",
"d": "Prompt में सवाल से पहले दिए गए हल किए हुए examples। जैसे “Q: When is the milestone due? A: Week 6, Thursday [P1]”।",
"h": "06-rag-pipeline-dense.html#w-demos"
},
"w-demos": {
"t": "Demonstrations (few-shot)",
"d": "Prompt में सवाल से पहले दिए गए हल किए हुए examples। जैसे “Q: When is the milestone due? A: Week 6, Thursday [P1]”।",
"h": "06-rag-pipeline-dense.html#w-demos"
},
"06-rag-pipeline-dense.html#w-multihop": {
"t": "Multi-hop question",
"d": "ऐसा सवाल, जिसके लिए कई बार ढूँढना पड़े, क्योंकि जवाब के हिस्से अलग passages में हैं। जैसे least crowded office hour कहाँ है: पहले queue log, फिर office hours page।",
"h": "06-rag-pipeline-dense.html#w-multihop"
},
"w-multihop": {
"t": "Multi-hop question",
"d": "ऐसा सवाल, जिसके लिए कई बार ढूँढना पड़े, क्योंकि जवाब के हिस्से अलग passages में हैं। जैसे least crowded office hour कहाँ है: पहले queue log, फिर office hours page।",
"h": "06-rag-pipeline-dense.html#w-multihop"
},
"06-rag-pipeline-dense.html#w-precision": {
"t": "Precision",
"d": "लौटे passages में से कितना हिस्सा सही है। जैसे K = 2 पर queue log सही और forum post गलत, तो precision = 1 ÷ 2 = 0.5।",
"h": "06-rag-pipeline-dense.html#w-precision"
},
"w-precision": {
"t": "Precision",
"d": "लौटे passages में से कितना हिस्सा सही है। जैसे K = 2 पर queue log सही और forum post गलत, तो precision = 1 ÷ 2 = 0.5।",
"h": "06-rag-pipeline-dense.html#w-precision"
},
"06-rag-pipeline-dense.html#w-relgain": {
"t": "Relative gain",
"d": "फ़र्क को पुराने number से भाग देकर % में लिखना। जैसे (51.4 − 36.9) ÷ 36.9 = 0.393, यानी करीब 39%। सीधा फ़र्क, 14.5, percentage points कहलाता है।",
"h": "06-rag-pipeline-dense.html#w-relgain"
},
"w-relgain": {
"t": "Relative gain",
"d": "फ़र्क को पुराने number से भाग देकर % में लिखना। जैसे (51.4 − 36.9) ÷ 36.9 = 0.393, यानी करीब 39%। सीधा फ़र्क, 14.5, percentage points कहलाता है।",
"h": "06-rag-pipeline-dense.html#w-relgain"
},
"06-rag-pipeline-dense.html#w-dsp": {
"t": "DSP",
"d": "Demonstrate–Search–Predict: frozen LM और frozen retriever के बीच text भेजने वाला program, जो demonstrations खुद बनाता है। 2022 में Stanford के Khattab और साथियों ने बनाया। जैसे HotPotQA पर Exact Match 51.4।",
"h": "06-rag-pipeline-dense.html#w-dsp"
},
"w-dsp": {
"t": "DSP",
"d": "Demonstrate–Search–Predict: frozen LM और frozen retriever के बीच text भेजने वाला program, जो demonstrations खुद बनाता है। 2022 में Stanford के Khattab और साथियों ने बनाया। जैसे HotPotQA पर Exact Match 51.4।",
"h": "06-rag-pipeline-dense.html#w-dsp"
},
"06-rag-pipeline-dense.html#w-iterretgen": {
"t": "ITER-RETGEN",
"d": "Retrieval और generation बारी-बारी, जिसमें पिछला जवाब और सवाल मिलकर अगली query बनते हैं। 2023 में Shao और साथियों ने बनाया। जैसे Thursday 9am जोड़ने से office hours page का score 1 से 3 होता है।",
"h": "06-rag-pipeline-dense.html#w-iterretgen"
},
"w-iterretgen": {
"t": "ITER-RETGEN",
"d": "Retrieval और generation बारी-बारी, जिसमें पिछला जवाब और सवाल मिलकर अगली query बनते हैं। 2023 में Shao और साथियों ने बनाया। जैसे Thursday 9am जोड़ने से office hours page का score 1 से 3 होता है।",
"h": "06-rag-pipeline-dense.html#w-iterretgen"
},
"06-rag-pipeline-dense.html#w-iterative": {
"t": "Iterative, recursive और adaptive retrieval",
"d": "एक से ज़्यादा बार ढूँढने के तीन तरीके। Iterative में तय गिनती तक बारी-बारी, recursive में सवाल को छोटे सवालों में तोड़कर, और adaptive में model खुद तय करता है। जैसे ITER-RETGEN iterative है, और Search-R1 का trace adaptive।",
"h": "06-rag-pipeline-dense.html#w-iterative"
},
"w-iterative": {
"t": "Iterative, recursive और adaptive retrieval",
"d": "एक से ज़्यादा बार ढूँढने के तीन तरीके। Iterative में तय गिनती तक बारी-बारी, recursive में सवाल को छोटे सवालों में तोड़कर, और adaptive में model खुद तय करता है। जैसे ITER-RETGEN iterative है, और Search-R1 का trace adaptive।",
"h": "06-rag-pipeline-dense.html#w-iterative"
},
"07-chunking-dense.html#w-wordtype": {
"t": "Word type और token in context",
"d": "Dictionary का एक शब्द, और किसी sentence में उसका एक इस्तेमाल। जैसे late एक word type है, और <q>Late days may not be applied</q> में उसका इस्तेमाल एक token in context।",
"h": "07-chunking-dense.html#w-wordtype"
},
"w-wordtype": {
"t": "Word type और token in context",
"d": "Dictionary का एक शब्द, और किसी sentence में उसका एक इस्तेमाल। जैसे late एक word type है, और <q>Late days may not be applied</q> में उसका इस्तेमाल एक token in context।",
"h": "07-chunking-dense.html#w-wordtype"
},
"07-chunking-dense.html#w-static": {
"t": "Static word embedding",
"d": "हर word type का एक ही vector, context कुछ भी हो। जैसे word2vec और GloVe। Late का vector दोनों sentences में [0.5, 0.5] रहता है। <span class=\"mine\">मेरे numbers</span>",
"h": "07-chunking-dense.html#w-static"
},
"w-static": {
"t": "Static word embedding",
"d": "हर word type का एक ही vector, context कुछ भी हो। जैसे word2vec और GloVe। Late का vector दोनों sentences में [0.5, 0.5] रहता है। <span class=\"mine\">मेरे numbers</span>",
"h": "07-chunking-dense.html#w-static"
},
"07-chunking-dense.html#w-contextual": {
"t": "Contextual embedding",
"d": "हर token का अपने sentence के हिसाब से अलग vector। जैसे BERT। <q>Late days may not be applied</q> में late [0.1, 0.9] है, और <q>late afternoon office hours</q> में [0.9, 0.1]। <span class=\"mine\">मेरे numbers</span>",
"h": "07-chunking-dense.html#w-contextual"
},
"w-contextual": {
"t": "Contextual embedding",
"d": "हर token का अपने sentence के हिसाब से अलग vector। जैसे BERT। <q>Late days may not be applied</q> में late [0.1, 0.9] है, और <q>late afternoon office hours</q> में [0.9, 0.1]। <span class=\"mine\">मेरे numbers</span>",
"h": "07-chunking-dense.html#w-contextual"
},
"07-chunking-dense.html#w-passageemb": {
"t": "Passage embedding",
"d": "पूरे chunk का एक vector, जिसे retrieval का index रखता है। जैसे Sentence-BERT, DPR और E5 के vectors।",
"h": "07-chunking-dense.html#w-passageemb"
},
"w-passageemb": {
"t": "Passage embedding",
"d": "पूरे chunk का एक vector, जिसे retrieval का index रखता है। जैसे Sentence-BERT, DPR और E5 के vectors।",
"h": "07-chunking-dense.html#w-passageemb"
},
"07-chunking-dense.html#w-multimodal": {
"t": "Multimodal embedding",
"d": "Text और image, दोनों के vectors एक ही space में। जैसे CLIP। Whiteboard पर लिखे office hours की photo और text <q>office hours schedule</q> के vectors पास आ सकते हैं।",
"h": "07-chunking-dense.html#w-multimodal"
},
"w-multimodal": {
"t": "Multimodal embedding",
"d": "Text और image, दोनों के vectors एक ही space में। जैसे CLIP। Whiteboard पर लिखे office hours की photo और text <q>office hours schedule</q> के vectors पास आ सकते हैं।",
"h": "07-chunking-dense.html#w-multimodal"
},
"07-chunking-dense.html#w-graphemb": {
"t": "Graph embedding",
"d": "किसी network के node या relation का vector। जैसे node2vec। Course के graph में TA, office hours, और उनके बीच का runs वाला relation।",
"h": "07-chunking-dense.html#w-graphemb"
},
"w-graphemb": {
"t": "Graph embedding",
"d": "किसी network के node या relation का vector। जैसे node2vec। Course के graph में TA, office hours, और उनके बीच का runs वाला relation।",
"h": "07-chunking-dense.html#w-graphemb"
},
"07-chunking-dense.html#w-pooling": {
"t": "Mean pooling",
"d": "कई token vectors का औसत लेकर एक vector बनाना। जैसे [0.9, 0.1], [0.7, 0.3] और [0.8, 0.2] का औसत [0.8, 0.2]।",
"h": "07-chunking-dense.html#w-pooling"
},
"w-pooling": {
"t": "Mean pooling",
"d": "कई token vectors का औसत लेकर एक vector बनाना। जैसे [0.9, 0.1], [0.7, 0.3] और [0.8, 0.2] का औसत [0.8, 0.2]।",
"h": "07-chunking-dense.html#w-pooling"
},
"07-chunking-dense.html#w-chunk": {
"t": "Chunk",
"d": "Retrieval के लिए document का एक टुकड़ा, और retrieval की basic unit। जैसे 40 pages के syllabus का Grading वाला हिस्सा।",
"h": "07-chunking-dense.html#w-chunk"
},
"w-chunk": {
"t": "Chunk",
"d": "Retrieval के लिए document का एक टुकड़ा, और retrieval की basic unit। जैसे 40 pages के syllabus का Grading वाला हिस्सा।",
"h": "07-chunking-dense.html#w-chunk"
},
"07-chunking-dense.html#w-fixed": {
"t": "Fixed-size chunking",
"d": "तय गिनती के tokens पर काटना, चाहे बात बीच में टूटे। जैसे हर 50 tokens पर।",
"h": "07-chunking-dense.html#w-fixed"
},
"w-fixed": {
"t": "Fixed-size chunking",
"d": "तय गिनती के tokens पर काटना, चाहे बात बीच में टूटे। जैसे हर 50 tokens पर।",
"h": "07-chunking-dense.html#w-fixed"
},
"07-chunking-dense.html#w-chunkoverlap": {
"t": "Overlap",
"d": "नया chunk पिछले chunk के आख़िरी कुछ tokens दोहराकर शुरू हो। L tokens की बात बचाने के लिए कम से कम L − 1। जैसे 7 शब्दों की तारीख के लिए 6।",
"h": "07-chunking-dense.html#w-chunkoverlap"
},
"w-chunkoverlap": {
"t": "Overlap",
"d": "नया chunk पिछले chunk के आख़िरी कुछ tokens दोहराकर शुरू हो। L tokens की बात बचाने के लिए कम से कम L − 1। जैसे 7 शब्दों की तारीख के लिए 6।",
"h": "07-chunking-dense.html#w-chunkoverlap"
},
"07-chunking-dense.html#w-stride": {
"t": "Stride",
"d": "दो लगातार chunks की शुरुआत के बीच की दूरी: chunk size − overlap। जैसे 9 − 6 = 3।",
"h": "07-chunking-dense.html#w-stride"
},
"w-stride": {
"t": "Stride",
"d": "दो लगातार chunks की शुरुआत के बीच की दूरी: chunk size − overlap। जैसे 9 − 6 = 3।",
"h": "07-chunking-dense.html#w-stride"
},
"07-chunking-dense.html#w-semantic": {
"t": "Semantic chunking",
"d": "Sentence या section जैसी logical boundaries पर काटना। जैसे syllabus को Grading, Office hours और Project वाली headings पर।",
"h": "07-chunking-dense.html#w-semantic"
},
"w-semantic": {
"t": "Semantic chunking",
"d": "Sentence या section जैसी logical boundaries पर काटना। जैसे syllabus को Grading, Office hours और Project वाली headings पर।",
"h": "07-chunking-dense.html#w-semantic"
},
"07-chunking-dense.html#w-enriched": {
"t": "Context-enriched chunking",
"d": "हर chunk के साथ metadata या summary रखना। जैसे हर chunk के ऊपर <q>Source: CS 329Z syllabus, section: Grading</q>।",
"h": "07-chunking-dense.html#w-enriched"
},
"w-enriched": {
"t": "Context-enriched chunking",
"d": "हर chunk के साथ metadata या summary रखना। जैसे हर chunk के ऊपर <q>Source: CS 329Z syllabus, section: Grading</q>।",
"h": "07-chunking-dense.html#w-enriched"
},
"07-chunking-dense.html#w-metadata": {
"t": "Metadata",
"d": "Data के बारे में data: नाम, section, तारीख। जैसे <q>CS 329Z syllabus, Grading, 30 Sep 2026</q>।",
"h": "07-chunking-dense.html#w-metadata"
},
"w-metadata": {
"t": "Metadata",
"d": "Data के बारे में data: नाम, section, तारीख। जैसे <q>CS 329Z syllabus, Grading, 30 Sep 2026</q>।",
"h": "07-chunking-dense.html#w-metadata"
},
"07-chunking-dense.html#w-aichunk": {
"t": "AI-driven dynamic chunking",
"d": "LLM से पूछकर काटना कि text में बात कहाँ बदलती है। हर document पर LLM calls लगती हैं।",
"h": "07-chunking-dense.html#w-aichunk"
},
"w-aichunk": {
"t": "AI-driven dynamic chunking",
"d": "LLM से पूछकर काटना कि text में बात कहाँ बदलती है। हर document पर LLM calls लगती हैं।",
"h": "07-chunking-dense.html#w-aichunk"
},
"07-chunking-dense.html#w-recursive": {
"t": "Recursive chunking",
"d": "Separators की सीढ़ी पर काटना: पहले paragraph, फिर line, फिर sentence, फिर space। जो टुकड़ा chunk size से बड़ा रहे, वही अगले separator पर कटता है। जैसे size 20 पर Grading section 19 और 7 शब्दों के दो chunks बनता है।",
"h": "07-chunking-dense.html#w-recursive"
},
"w-recursive": {
"t": "Recursive chunking",
"d": "Separators की सीढ़ी पर काटना: पहले paragraph, फिर line, फिर sentence, फिर space। जो टुकड़ा chunk size से बड़ा रहे, वही अगले separator पर कटता है। जैसे size 20 पर Grading section 19 और 7 शब्दों के दो chunks बनता है।",
"h": "07-chunking-dense.html#w-recursive"
},
"07-chunking-dense.html#w-ceil": {
"t": "⌈x⌉ (ceiling)",
"d": "x या उससे बड़ा सबसे छोटा पूरा number। जैसे ⌈23.75⌉ = 24, और chunks = ⌈(1,000 − 50) ÷ 40⌉ + 1 = 25।",
"h": "07-chunking-dense.html#w-ceil"
},
"w-ceil": {
"t": "⌈x⌉ (ceiling)",
"d": "x या उससे बड़ा सबसे छोटा पूरा number। जैसे ⌈23.75⌉ = 24, और chunks = ⌈(1,000 − 50) ÷ 40⌉ + 1 = 25।",
"h": "07-chunking-dense.html#w-ceil"
},
"08-contextual-retrieval-dense.html#w-contextloss": {
"t": "Context loss",
"d": "काटने के बाद chunk ये न बता पाए कि वो किस document या विषय की बात है। जैसे <q>The company’s revenue grew by 3%</q> में company का नाम नहीं है।",
"h": "08-contextual-retrieval-dense.html#w-contextloss"
},
"w-contextloss": {
"t": "Context loss",
"d": "काटने के बाद chunk ये न बता पाए कि वो किस document या विषय की बात है। जैसे <q>The company’s revenue grew by 3%</q> में company का नाम नहीं है।",
"h": "08-contextual-retrieval-dense.html#w-contextloss"
},
"08-contextual-retrieval-dense.html#w-ctxretrieval": {
"t": "Contextual retrieval",
"d": "हर chunk के आगे LLM का लिखा 50–100 tokens का context जोड़कर index करना। जैसे <q>From ACME Corp’s Q2 2023 SEC filing</q>।",
"h": "08-contextual-retrieval-dense.html#w-ctxretrieval"
},
"w-ctxretrieval": {
"t": "Contextual retrieval",
"d": "हर chunk के आगे LLM का लिखा 50–100 tokens का context जोड़कर index करना। जैसे <q>From ACME Corp’s Q2 2023 SEC filing</q>।",
"h": "08-contextual-retrieval-dense.html#w-ctxretrieval"
},
"08-contextual-retrieval-dense.html#w-failed20": {
"t": "Failed retrievals@20",
"d": "हर query का एक सही chunk हो, तो कितने % queries में वो top-20 में नहीं आया। छोटा बेहतर। जैसे 1,000 queries में 29 fail हों, तो 2.9%।",
"h": "08-contextual-retrieval-dense.html#w-failed20"
},
"w-failed20": {
"t": "Failed retrievals@20",
"d": "हर query का एक सही chunk हो, तो कितने % queries में वो top-20 में नहीं आया। छोटा बेहतर। जैसे 1,000 queries में 29 fail हों, तो 2.9%।",
"h": "08-contextual-retrieval-dense.html#w-failed20"
},
"08-contextual-retrieval-dense.html#w-naivechunk": {
"t": "Naive chunking",
"d": "पहले काटना, फिर हर chunk को अकेले encode करना। तब <q>It is due Week 6</q> का vector [0.5, 0.5] रहता है।",
"h": "08-contextual-retrieval-dense.html#w-naivechunk"
},
"w-naivechunk": {
"t": "Naive chunking",
"d": "पहले काटना, फिर हर chunk को अकेले encode करना। तब <q>It is due Week 6</q> का vector [0.5, 0.5] रहता है।",
"h": "08-contextual-retrieval-dense.html#w-naivechunk"
},
"08-contextual-retrieval-dense.html#w-latechunk": {
"t": "Late chunking",
"d": "पहले पूरा document encode करना, फिर हर chunk के token vectors पर mean pooling। तब <q>It is due Week 6</q> का vector [0.9, 0.1] बनता है।",
"h": "08-contextual-retrieval-dense.html#w-latechunk"
},
"w-latechunk": {
"t": "Late chunking",
"d": "पहले पूरा document encode करना, फिर हर chunk के token vectors पर mean pooling। तब <q>It is due Week 6</q> का vector [0.9, 0.1] बनता है।",
"h": "08-contextual-retrieval-dense.html#w-latechunk"
},
"08-contextual-retrieval-dense.html#w-longctx": {
"t": "Long-context encoder",
"d": "ऐसा encoder, जो एक बार में बहुत लंबा text पढ़ सके। जैसे 8,192 tokens, यानी करीब 10 pages।",
"h": "08-contextual-retrieval-dense.html#w-longctx"
},
"w-longctx": {
"t": "Long-context encoder",
"d": "ऐसा encoder, जो एक बार में बहुत लंबा text पढ़ सके। जैसे 8,192 tokens, यानी करीब 10 pages।",
"h": "08-contextual-retrieval-dense.html#w-longctx"
},
"08-contextual-retrieval-dense.html#w-promptcache": {
"t": "Prompt caching",
"d": "LLM service prompt का बार-बार आने वाला हिस्सा पहली call के बाद याद रखती है, जैसे पूरा document। इसलिए अगली calls में वो हिस्सा सस्ता पड़ता है। Blog के मुताबिक तब contextual retrieval का खर्च हर 10 लाख document tokens पर $1.02 है।",
"h": "08-contextual-retrieval-dense.html#w-promptcache"
},
"w-promptcache": {
"t": "Prompt caching",
"d": "LLM service prompt का बार-बार आने वाला हिस्सा पहली call के बाद याद रखती है, जैसे पूरा document। इसलिए अगली calls में वो हिस्सा सस्ता पड़ता है। Blog के मुताबिक तब contextual retrieval का खर्च हर 10 लाख document tokens पर $1.02 है।",
"h": "08-contextual-retrieval-dense.html#w-promptcache"
},
"08-contextual-retrieval-dense.html#w-iid": {
"t": "i.i.d. और conditional embeddings",
"d": "i.i.d.: हर chunk का vector दूसरे chunks से बिल्कुल अलग बनना, जैसे naive chunking में। Conditional: हर chunk का vector पूरे document को देखकर बनना, जैसे late chunking में <q>It</q> का [0.9, 0.1]।",
"h": "08-contextual-retrieval-dense.html#w-iid"
},
"w-iid": {
"t": "i.i.d. और conditional embeddings",
"d": "i.i.d.: हर chunk का vector दूसरे chunks से बिल्कुल अलग बनना, जैसे naive chunking में। Conditional: हर chunk का vector पूरे document को देखकर बनना, जैसे late chunking में <q>It</q> का [0.9, 0.1]।",
"h": "08-contextual-retrieval-dense.html#w-iid"
},
"08-contextual-retrieval-dense.html#w-longlate": {
"t": "Long late chunking",
"d": "Encoder की limit से लंबे document को overlap वाली बड़ी windows में पढ़कर late chunking करना। जैसे 20,000 tokens को 8,192 tokens की windows में, हर नई window 1,000 tokens पीछे से शुरू।",
"h": "08-contextual-retrieval-dense.html#w-longlate"
},
"w-longlate": {
"t": "Long late chunking",
"d": "Encoder की limit से लंबे document को overlap वाली बड़ी windows में पढ़कर late chunking करना। जैसे 20,000 tokens को 8,192 tokens की windows में, हर नई window 1,000 tokens पीछे से शुरू।",
"h": "08-contextual-retrieval-dense.html#w-longlate"
},
"09-raptor-graphrag-dense.html#w-detailq": {
"t": "Detail question और thematic question",
"d": "जवाब एक जगह लिखा हो, या कई passages को मिलाकर बने। जैसे “milestone कब है?” और “सारी deadlines क्या हैं?”।",
"h": "09-raptor-graphrag-dense.html#w-detailq"
},
"w-detailq": {
"t": "Detail question और thematic question",
"d": "जवाब एक जगह लिखा हो, या कई passages को मिलाकर बने। जैसे “milestone कब है?” और “सारी deadlines क्या हैं?”।",
"h": "09-raptor-graphrag-dense.html#w-detailq"
},
"09-raptor-graphrag-dense.html#w-clustering": {
"t": "Clustering",
"d": "Vectors को ऐसे groups में बाँटना कि एक group के vectors आपस में पास हों। जैसे syllabus [0.1, 0.9] और project page [0.2, 0.8] का cosine 0.99 है, तो दोनों एक group में।",
"h": "09-raptor-graphrag-dense.html#w-clustering"
},
"w-clustering": {
"t": "Clustering",
"d": "Vectors को ऐसे groups में बाँटना कि एक group के vectors आपस में पास हों। जैसे syllabus [0.1, 0.9] और project page [0.2, 0.8] का cosine 0.99 है, तो दोनों एक group में।",
"h": "09-raptor-graphrag-dense.html#w-clustering"
},
"09-raptor-graphrag-dense.html#w-cluster": {
"t": "Cluster और centroid",
"d": "Cluster एक group है, और centroid उसके vectors का औसत। जैसे [0.1, 0.9], [0.2, 0.8] और [0.15, 0.85] का centroid [0.15, 0.85]।",
"h": "09-raptor-graphrag-dense.html#w-cluster"
},
"w-cluster": {
"t": "Cluster और centroid",
"d": "Cluster एक group है, और centroid उसके vectors का औसत। जैसे [0.1, 0.9], [0.2, 0.8] और [0.15, 0.85] का centroid [0.15, 0.85]।",
"h": "09-raptor-graphrag-dense.html#w-cluster"
},
"09-raptor-graphrag-dense.html#w-softclust": {
"t": "Soft clustering",
"d": "एक passage को एक से ज़्यादा clusters में रखना। जैसे FAQ page, जिसका cosine दोनों centroids से ऊँचा है (0.86 और 0.78)।",
"h": "09-raptor-graphrag-dense.html#w-softclust"
},
"w-softclust": {
"t": "Soft clustering",
"d": "एक passage को एक से ज़्यादा clusters में रखना। जैसे FAQ page, जिसका cosine दोनों centroids से ऊँचा है (0.86 और 0.78)।",
"h": "09-raptor-graphrag-dense.html#w-softclust"
},
"09-raptor-graphrag-dense.html#w-raptor": {
"t": "RAPTOR",
"d": "Clusters के सारों से नीचे से ऊपर tree बनाना, और हर level पर ढूँढना। जैसे सारी deadlines वाला सवाल सार A से मिलता है।",
"h": "09-raptor-graphrag-dense.html#w-raptor"
},
"w-raptor": {
"t": "RAPTOR",
"d": "Clusters के सारों से नीचे से ऊपर tree बनाना, और हर level पर ढूँढना। जैसे सारी deadlines वाला सवाल सार A से मिलता है।",
"h": "09-raptor-graphrag-dense.html#w-raptor"
},
"09-raptor-graphrag-dense.html#w-tree": {
"t": "Tree, node, leaf, root",
"d": "Levels वाला ढाँचा: node एक box, leaf सबसे नीचे का node, और root सबसे ऊपर का। जैसे 6 chunks (leaves) के ऊपर 2 सार, और उनके ऊपर 1 root।",
"h": "09-raptor-graphrag-dense.html#w-tree"
},
"w-tree": {
"t": "Tree, node, leaf, root",
"d": "Levels वाला ढाँचा: node एक box, leaf सबसे नीचे का node, और root सबसे ऊपर का। जैसे 6 chunks (leaves) के ऊपर 2 सार, और उनके ऊपर 1 root।",
"h": "09-raptor-graphrag-dense.html#w-tree"
},
"09-raptor-graphrag-dense.html#w-entity": {
"t": "Entity",
"d": "नाम वाली कोई चीज़: व्यक्ति, जगह, course, document या तारीख। जैसे Week 6, TAs, Room 104।",
"h": "09-raptor-graphrag-dense.html#w-entity"
},
"w-entity": {
"t": "Entity",
"d": "नाम वाली कोई चीज़: व्यक्ति, जगह, course, document या तारीख। जैसे Week 6, TAs, Room 104।",
"h": "09-raptor-graphrag-dense.html#w-entity"
},
"09-raptor-graphrag-dense.html#w-relation": {
"t": "Relation",
"d": "दो entities का रिश्ता। जैसे (Project milestone, due, Week 6)।",
"h": "09-raptor-graphrag-dense.html#w-relation"
},
"w-relation": {
"t": "Relation",
"d": "दो entities का रिश्ता। जैसे (Project milestone, due, Week 6)।",
"h": "09-raptor-graphrag-dense.html#w-relation"
},
"09-raptor-graphrag-dense.html#w-kg": {
"t": "Knowledge graph और edge",
"d": "Entities (nodes) और relations (edges) का network। जैसे milestone और Week 6 के बीच एक edge, जिस पर “due” लिखा है।",
"h": "09-raptor-graphrag-dense.html#w-kg"
},
"w-kg": {
"t": "Knowledge graph और edge",
"d": "Entities (nodes) और relations (edges) का network। जैसे milestone और Week 6 के बीच एक edge, जिस पर “due” लिखा है।",
"h": "09-raptor-graphrag-dense.html#w-kg"
},
"09-raptor-graphrag-dense.html#w-community": {
"t": "Community",
"d": "Graph का आपस में बहुत जुड़ा हिस्सा। जैसे Office hours, TAs, Room 104 और Zoom।",
"h": "09-raptor-graphrag-dense.html#w-community"
},
"w-community": {
"t": "Community",
"d": "Graph का आपस में बहुत जुड़ा हिस्सा। जैसे Office hours, TAs, Room 104 और Zoom।",
"h": "09-raptor-graphrag-dense.html#w-community"
},
"09-raptor-graphrag-dense.html#w-graphrag": {
"t": "GraphRAG",
"d": "Knowledge graph, उसकी communities और उनके सारों से global सवालों का जवाब। जैसे सारी deadlines वाला जवाब, जो Project और Homework 1 वाली communities से बनता है।",
"h": "09-raptor-graphrag-dense.html#w-graphrag"
},
"w-graphrag": {
"t": "GraphRAG",
"d": "Knowledge graph, उसकी communities और उनके सारों से global सवालों का जवाब। जैसे सारी deadlines वाला जवाब, जो Project और Homework 1 वाली communities से बनता है।",
"h": "09-raptor-graphrag-dense.html#w-graphrag"
},
"09-raptor-graphrag-dense.html#w-qfs": {
"t": "Query-focused summarization",
"d": "सवाल को ध्यान में रखकर सार लिखना। जैसे “सारी deadlines” पूछने पर Project community के सार से सिर्फ़ तारीखें आएँ।",
"h": "09-raptor-graphrag-dense.html#w-qfs"
},
"w-qfs": {
"t": "Query-focused summarization",
"d": "सवाल को ध्यान में रखकर सार लिखना। जैसे “सारी deadlines” पूछने पर Project community के सार से सिर्फ़ तारीखें आएँ।",
"h": "09-raptor-graphrag-dense.html#w-qfs"
},
"09-raptor-graphrag-dense.html#w-gmm": {
"t": "Gaussian mixture model (GMM)",
"d": "Bell curves का weighted जोड़: P(x) = ∑ π<sub>k</sub> 𝒩<sub>k</sub>(x)। ये हर passage को हर cluster की membership देता है। जैसे [0.6, 0.4] को office hours 0.904 और deadlines 0.096।",
"h": "09-raptor-graphrag-dense.html#w-gmm"
},
"w-gmm": {
"t": "Gaussian mixture model (GMM)",
"d": "Bell curves का weighted जोड़: P(x) = ∑ π<sub>k</sub> 𝒩<sub>k</sub>(x)। ये हर passage को हर cluster की membership देता है। जैसे [0.6, 0.4] को office hours 0.904 और deadlines 0.096।",
"h": "09-raptor-graphrag-dense.html#w-gmm"
},
"09-raptor-graphrag-dense.html#w-bic": {
"t": "BIC",
"d": "ln(N) · k − 2 ln(L̂): fit की likelihood और parameters की गिनती तौलकर clusters की गिनती चुनना, और सबसे छोटा BIC जीतता है। जैसे 6 passages पर K = 2 का BIC −23.64, और K = 3 का −20.11।",
"h": "09-raptor-graphrag-dense.html#w-bic"
},
"w-bic": {
"t": "BIC",
"d": "ln(N) · k − 2 ln(L̂): fit की likelihood और parameters की गिनती तौलकर clusters की गिनती चुनना, और सबसे छोटा BIC जीतता है। जैसे 6 passages पर K = 2 का BIC −23.64, और K = 3 का −20.11।",
"h": "09-raptor-graphrag-dense.html#w-bic"
},
"09-raptor-graphrag-dense.html#w-umap": {
"t": "UMAP",
"d": "Vectors को कम numbers में बदलना, ताकि पास वाले points पास रहें। जैसे RAPTOR के code में हर vector 10 numbers का बनता है।",
"h": "09-raptor-graphrag-dense.html#w-umap"
},
"w-umap": {
"t": "UMAP",
"d": "Vectors को कम numbers में बदलना, ताकि पास वाले points पास रहें। जैसे RAPTOR के code में हर vector 10 numbers का बनता है।",
"h": "09-raptor-graphrag-dense.html#w-umap"
},
"09-raptor-graphrag-dense.html#w-collapsed": {
"t": "Tree traversal और collapsed tree",
"d": "ऊपर से नीचे हर level पर top-k चुनना, या सारे nodes एक list में sort करके token limit तक लेना। जैसे deadlines वाले सवाल पर collapsed tree 100 tokens में 5 nodes लेता है, और A सबसे पहले।",
"h": "09-raptor-graphrag-dense.html#w-collapsed"
},
"w-collapsed": {
"t": "Tree traversal और collapsed tree",
"d": "ऊपर से नीचे हर level पर top-k चुनना, या सारे nodes एक list में sort करके token limit तक लेना। जैसे deadlines वाले सवाल पर collapsed tree 100 tokens में 5 nodes लेता है, और A सबसे पहले।",
"h": "09-raptor-graphrag-dense.html#w-collapsed"
},
"09-raptor-graphrag-dense.html#w-f1": {
"t": "F1",
"d": "Precision और recall को मिलाने वाला नाप, 2PR ÷ (P + R)। जैसे P = 0.75 और R = 0.6 पर F1 = 0.667।",
"h": "09-raptor-graphrag-dense.html#w-f1"
},
"w-f1": {
"t": "F1",
"d": "Precision और recall को मिलाने वाला नाप, 2PR ÷ (P + R)। जैसे P = 0.75 और R = 0.6 पर F1 = 0.667।",
"h": "09-raptor-graphrag-dense.html#w-f1"
},
"09-raptor-graphrag-dense.html#w-leiden": {
"t": "Leiden और degree",
"d": "Leiden graph को ऐसी communities में बाँटता है, जिनके अंदर edges ज़्यादा हों। Degree किसी node के edges की गिनती है। जैसे Project की degree 3 है।",
"h": "09-raptor-graphrag-dense.html#w-leiden"
},
"w-leiden": {
"t": "Leiden और degree",
"d": "Leiden graph को ऐसी communities में बाँटता है, जिनके अंदर edges ज़्यादा हों। Degree किसी node के edges की गिनती है। जैसे Project की degree 3 है।",
"h": "09-raptor-graphrag-dense.html#w-leiden"
},
"09-raptor-graphrag-dense.html#w-mapreduce": {
"t": "Map-reduce",
"d": "हर टुकड़े पर अलग से एक ही काम (map), फिर नतीजे जोड़ना (reduce)। जैसे हर community से हिस्सा-जवाब और score, फिर score के क्रम में आख़िरी जवाब।",
"h": "09-raptor-graphrag-dense.html#w-mapreduce"
},
"w-mapreduce": {
"t": "Map-reduce",
"d": "हर टुकड़े पर अलग से एक ही काम (map), फिर नतीजे जोड़ना (reduce)। जैसे हर community से हिस्सा-जवाब और score, फिर score के क्रम में आख़िरी जवाब।",
"h": "09-raptor-graphrag-dense.html#w-mapreduce"
},
"09-raptor-graphrag-dense.html#w-winrate": {
"t": "Win rate",
"d": "दो systems की तुलना में कितने % फ़ैसले एक के पक्ष में गए, और 50% का मतलब बराबरी। जैसे 625 में से करीब 450 फ़ैसले, यानी 72%।",
"h": "09-raptor-graphrag-dense.html#w-winrate"
},
"w-winrate": {
"t": "Win rate",
"d": "दो systems की तुलना में कितने % फ़ैसले एक के पक्ष में गए, और 50% का मतलब बराबरी। जैसे 625 में से करीब 450 फ़ैसले, यानी 72%।",
"h": "09-raptor-graphrag-dense.html#w-winrate"
},
"10-vector-search-dense.html#w-exact": {
"t": "Exact search (brute force)",
"d": "हर vector से तुलना करके पक्का सही top-k निकालना। जैसे 21 vectors हों, तो 21 दूरियाँ गिनना।",
"h": "10-vector-search-dense.html#w-exact"
},
"w-exact": {
"t": "Exact search (brute force)",
"d": "हर vector से तुलना करके पक्का सही top-k निकालना। जैसे 21 vectors हों, तो 21 दूरियाँ गिनना।",
"h": "10-vector-search-dense.html#w-exact"
},
"10-vector-search-dense.html#w-bigo": {
"t": "Big-O, O(N·d)",
"d": "N या d बढ़ने पर खर्च किस हिसाब से बढ़ता है। जैसे O(N·d) में N दोगुना हो, तो खर्च भी दोगुना।",
"h": "10-vector-search-dense.html#w-bigo"
},
"w-bigo": {
"t": "Big-O, O(N·d)",
"d": "N या d बढ़ने पर खर्च किस हिसाब से बढ़ता है। जैसे O(N·d) में N दोगुना हो, तो खर्च भी दोगुना।",
"h": "10-vector-search-dense.html#w-bigo"
},
"10-vector-search-dense.html#w-nn": {
"t": "Nearest neighbors",
"d": "Query के सबसे पास वाले vectors। जैसे query 73 के पास वालों में 75 पहले आता है।",
"h": "10-vector-search-dense.html#w-nn"
},
"w-nn": {
"t": "Nearest neighbors",
"d": "Query के सबसे पास वाले vectors। जैसे query 73 के पास वालों में 75 पहले आता है।",
"h": "10-vector-search-dense.html#w-nn"
},
"10-vector-search-dense.html#w-ann": {
"t": "ANN",
"d": "Approximate nearest neighbor search: कम vectors देखकर ज़्यादातर बार सही neighbors ढूँढना। जैसे असली top-10 में से 9 मिलें, तो recall 0.9।",
"h": "10-vector-search-dense.html#w-ann"
},
"w-ann": {
"t": "ANN",
"d": "Approximate nearest neighbor search: कम vectors देखकर ज़्यादातर बार सही neighbors ढूँढना। जैसे असली top-10 में से 9 मिलें, तो recall 0.9।",
"h": "10-vector-search-dense.html#w-ann"
},
"10-vector-search-dense.html#w-distance": {
"t": "दूरी",
"d": "दो vectors के फ़र्क वाले vector की length। जैसे [0.8, 0.2] और [0.9, 0.1] का फ़र्क [0.1, −0.1] है, तो दूरी √(0.01 + 0.01) = 0.14।",
"h": "10-vector-search-dense.html#w-distance"
},
"w-distance": {
"t": "दूरी",
"d": "दो vectors के फ़र्क वाले vector की length। जैसे [0.8, 0.2] और [0.9, 0.1] का फ़र्क [0.1, −0.1] है, तो दूरी √(0.01 + 0.01) = 0.14।",
"h": "10-vector-search-dense.html#w-distance"
},
"10-vector-search-dense.html#w-ivf": {
"t": "IVF",
"d": "Inverted file index: vectors को clusters में बाँटकर query के पास वाले clusters ही देखना। जैसे 10 लाख vectors पर 11,000 तुलनाएँ।",
"h": "10-vector-search-dense.html#w-ivf"
},
"w-ivf": {
"t": "IVF",
"d": "Inverted file index: vectors को clusters में बाँटकर query के पास वाले clusters ही देखना। जैसे 10 लाख vectors पर 11,000 तुलनाएँ।",
"h": "10-vector-search-dense.html#w-ivf"
},
"10-vector-search-dense.html#w-nprobe": {
"t": "nprobe",
"d": "IVF में कितने clusters देखने हैं। जैसे 1,000 clusters में nprobe = 10 हो, तो सिर्फ़ 10 clusters के vectors देखना।",
"h": "10-vector-search-dense.html#w-nprobe"
},
"w-nprobe": {
"t": "nprobe",
"d": "IVF में कितने clusters देखने हैं। जैसे 1,000 clusters में nprobe = 10 हो, तो सिर्फ़ 10 clusters के vectors देखना।",
"h": "10-vector-search-dense.html#w-nprobe"
},
"10-vector-search-dense.html#w-pq": {
"t": "Product quantization (PQ)",
"d": "Vector को टुकड़ों में काटकर हर टुकड़े की जगह codeword का number रखना। जैसे [0.9, 0.1, 0.2, 0.8] बनता है code (0, 1)।",
"h": "10-vector-search-dense.html#w-pq"
},
"w-pq": {
"t": "Product quantization (PQ)",
"d": "Vector को टुकड़ों में काटकर हर टुकड़े की जगह codeword का number रखना। जैसे [0.9, 0.1, 0.2, 0.8] बनता है code (0, 1)।",
"h": "10-vector-search-dense.html#w-pq"
},
"10-vector-search-dense.html#w-codebook": {
"t": "Codebook",
"d": "हर टुकड़े के नमूना vectors (codewords) की list। जैसे #0 [1, 0], #1 [0, 1], #2 [0.5, 0.5], #3 [0.7, 0.7]।",
"h": "10-vector-search-dense.html#w-codebook"
},
"w-codebook": {
"t": "Codebook",
"d": "हर टुकड़े के नमूना vectors (codewords) की list। जैसे #0 [1, 0], #1 [0, 1], #2 [0.5, 0.5], #3 [0.7, 0.7]।",
"h": "10-vector-search-dense.html#w-codebook"
},
"10-vector-search-dense.html#w-proxgraph": {
"t": "Proximity graph",
"d": "ऐसा graph, जिसमें हर vector अपने पास वाले vectors से जुड़ा हो। जैसे 70 अपने पड़ोसी 65 और 75 से जुड़ा है।",
"h": "10-vector-search-dense.html#w-proxgraph"
},
"w-proxgraph": {
"t": "Proximity graph",
"d": "ऐसा graph, जिसमें हर vector अपने पास वाले vectors से जुड़ा हो। जैसे 70 अपने पड़ोसी 65 और 75 से जुड़ा है।",
"h": "10-vector-search-dense.html#w-proxgraph"
},
"10-vector-search-dense.html#w-greedy": {
"t": "Greedy search",
"d": "हर कदम पर query के सबसे पास वाले neighbor पर जाना, अटकने तक। जैसे query 73 के लिए 70 से 75 पर जाना।",
"h": "10-vector-search-dense.html#w-greedy"
},
"w-greedy": {
"t": "Greedy search",
"d": "हर कदम पर query के सबसे पास वाले neighbor पर जाना, अटकने तक। जैसे query 73 के लिए 70 से 75 पर जाना।",
"h": "10-vector-search-dense.html#w-greedy"
},
"10-vector-search-dense.html#w-hnsw": {
"t": "HNSW",
"d": "Layers वाला proximity graph: ऊपर से greedy चाल, और अटकने पर एक layer नीचे। जैसे query 73 पर 4 कदम।",
"h": "10-vector-search-dense.html#w-hnsw"
},
"w-hnsw": {
"t": "HNSW",
"d": "Layers वाला proximity graph: ऊपर से greedy चाल, और अटकने पर एक layer नीचे। जैसे query 73 पर 4 कदम।",
"h": "10-vector-search-dense.html#w-hnsw"
},
"10-vector-search-dense.html#w-kmeans": {
"t": "k-means",
"d": "Vectors को k clusters में बाँटने का तरीका: हर vector को सबसे पास वाले centroid को देना, फिर हर centroid को औसत बनाना। जैसे 6 passages पर 3 rounds में A = [0.817, 0.2] और B = [0.2, 0.8]।",
"h": "10-vector-search-dense.html#w-kmeans"
},
"w-kmeans": {
"t": "k-means",
"d": "Vectors को k clusters में बाँटने का तरीका: हर vector को सबसे पास वाले centroid को देना, फिर हर centroid को औसत बनाना। जैसे 6 passages पर 3 rounds में A = [0.817, 0.2] और B = [0.2, 0.8]।",
"h": "10-vector-search-dense.html#w-kmeans"
},
"10-vector-search-dense.html#w-adc": {
"t": "Lookup table (ADC)",
"d": "Query के हर टुकड़े का हर codeword से score पहले निकालकर table में रखना। तब हर passage का score बस table के numbers का जोड़ है। जैसे code (0, 1) का score 1 + 1 = 2.0।",
"h": "10-vector-search-dense.html#w-adc"
},
"w-adc": {
"t": "Lookup table (ADC)",
"d": "Query के हर टुकड़े का हर codeword से score पहले निकालकर table में रखना। तब हर passage का score बस table के numbers का जोड़ है। जैसे code (0, 1) का score 1 + 1 = 2.0।",
"h": "10-vector-search-dense.html#w-adc"
},
"10-vector-search-dense.html#w-residual": {
"t": "Residual",
"d": "Vector में से उसके cluster का centroid घटाने पर बचा फ़र्क। IVFADC इसी का code बनाता है। जैसे queue log [0.85, 0.2] − [0.817, 0.2] = [0.033, 0]।",
"h": "10-vector-search-dense.html#w-residual"
},
"w-residual": {
"t": "Residual",
"d": "Vector में से उसके cluster का centroid घटाने पर बचा फ़र्क। IVFADC इसी का code बनाता है। जैसे queue log [0.85, 0.2] − [0.817, 0.2] = [0.033, 0]।",
"h": "10-vector-search-dense.html#w-residual"
},
"10-vector-search-dense.html#w-ef": {
"t": "ef",
"d": "HNSW की search में अब तक मिले सबसे पास वाले nodes की list का size। बड़ा ef यानी ज़्यादा दूरियाँ और ऊँचा recall। जैसे node 70 से ef = 3 पर नतीजा {75, 70, 80}।",
"h": "10-vector-search-dense.html#w-ef"
},
"w-ef": {
"t": "ef",
"d": "HNSW की search में अब तक मिले सबसे पास वाले nodes की list का size। बड़ा ef यानी ज़्यादा दूरियाँ और ऊँचा recall। जैसे node 70 से ef = 3 पर नतीजा {75, 70, 80}।",
"h": "10-vector-search-dense.html#w-ef"
},
"10-vector-search-dense.html#w-heuristic": {
"t": "Neighbors चुनने का नियम (heuristic)",
"d": "Candidate तभी जुड़ता है, जब वो पहले से जुड़े हर node की तुलना में नए node के ज़्यादा पास हो। जैसे X के लिए A और E2 जुड़ते हैं, और B और C छूटते हैं।",
"h": "10-vector-search-dense.html#w-heuristic"
},
"w-heuristic": {
"t": "Neighbors चुनने का नियम (heuristic)",
"d": "Candidate तभी जुड़ता है, जब वो पहले से जुड़े हर node की तुलना में नए node के ज़्यादा पास हो। जैसे X के लिए A और E2 जुड़ते हैं, और B और C छूटते हैं।",
"h": "10-vector-search-dense.html#w-heuristic"
},
"11-bm25-dense.html#w-term": {
"t": "Term",
"d": "Search में query का एक शब्द। जैसे <q>which office hour</q> में office और hour।",
"h": "11-bm25-dense.html#w-term"
},
"w-term": {
"t": "Term",
"d": "Search में query का एक शब्द। जैसे <q>which office hour</q> में office और hour।",
"h": "11-bm25-dense.html#w-term"
},
"11-bm25-dense.html#w-df": {
"t": "Document frequency, n(q)",
"d": "कितने documents में term q है। जैसे milestone का n = 1, और office का 2।",
"h": "11-bm25-dense.html#w-df"
},
"w-df": {
"t": "Document frequency, n(q)",
"d": "कितने documents में term q है। जैसे milestone का n = 1, और office का 2।",
"h": "11-bm25-dense.html#w-df"
},
"11-bm25-dense.html#w-idf": {
"t": "IDF",
"d": "ln((N − n + 0.5) ÷ (n + 0.5)), rare term का बड़ा वज़न। जैसे milestone का 1.299, और office का 0.588।",
"h": "11-bm25-dense.html#w-idf"
},
"w-idf": {
"t": "IDF",
"d": "ln((N − n + 0.5) ÷ (n + 0.5)), rare term का बड़ा वज़न। जैसे milestone का 1.299, और office का 0.588।",
"h": "11-bm25-dense.html#w-idf"
},
"11-bm25-dense.html#w-tfidf": {
"t": "TF-IDF",
"d": "Term की गिनती × ln(N ÷ n), BM25 से पुराना तरीका। जैसे N = 6, n = 2, f = 2 पर 2 × ln 3 = 2.20।",
"h": "11-bm25-dense.html#w-tfidf"
},
"w-tfidf": {
"t": "TF-IDF",
"d": "Term की गिनती × ln(N ÷ n), BM25 से पुराना तरीका। जैसे N = 6, n = 2, f = 2 पर 2 × ln 3 = 2.20।",
"h": "11-bm25-dense.html#w-tfidf"
},
"11-bm25-dense.html#w-tf": {
"t": "Term frequency, f(q, D)",
"d": "Term q document D में कितनी बार है। जैसे queue log में office की f = 2।",
"h": "11-bm25-dense.html#w-tf"
},
"w-tf": {
"t": "Term frequency, f(q, D)",
"d": "Term q document D में कितनी बार है। जैसे queue log में office की f = 2।",
"h": "11-bm25-dense.html#w-tf"
},
"11-bm25-dense.html#w-saturation": {
"t": "Saturation और k1",
"d": "गिनती बढ़ने पर फ़ायदा धीरे-धीरे भरता है, k1 + 1 की छत तक। जैसे k1 = 1.2 पर f = 1, 2, 10 का हिस्सा 1.000, 1.375, 1.964।",
"h": "11-bm25-dense.html#w-saturation"
},
"w-saturation": {
"t": "Saturation और k1",
"d": "गिनती बढ़ने पर फ़ायदा धीरे-धीरे भरता है, k1 + 1 की छत तक। जैसे k1 = 1.2 पर f = 1, 2, 10 का हिस्सा 1.000, 1.375, 1.964।",
"h": "11-bm25-dense.html#w-saturation"
},
"11-bm25-dense.html#w-lengthnorm": {
"t": "Length normalization, b और avgdl",
"d": "औसत से लंबे documents का TF हिस्सा घटाना, b जितना असर। जैसे avgdl = 16.17 और b = 0.75 पर दोगुने लंबे document का हिस्सा 0.710।",
"h": "11-bm25-dense.html#w-lengthnorm"
},
"w-lengthnorm": {
"t": "Length normalization, b और avgdl",
"d": "औसत से लंबे documents का TF हिस्सा घटाना, b जितना असर। जैसे avgdl = 16.17 और b = 0.75 पर दोगुने लंबे document का हिस्सा 0.710।",
"h": "11-bm25-dense.html#w-lengthnorm"
},
"11-bm25-dense.html#w-bm25": {
"t": "BM25",
"d": "हर query term का IDF × TF हिस्सा, सब terms का जोड़। जैसे forum post का 2.749, और queue log का 2.473।",
"h": "11-bm25-dense.html#w-bm25"
},
"w-bm25": {
"t": "BM25",
"d": "हर query term का IDF × TF हिस्सा, सब terms का जोड़। जैसे forum post का 2.749, और queue log का 2.473।",
"h": "11-bm25-dense.html#w-bm25"
},
"11-bm25-dense.html#w-hyperparam": {
"t": "Hyperparameter",
"d": "Formula या model का ऐसा number, जिसे training नहीं बदलती, और जिसे dev set पर आज़माकर चुनते हैं। जैसे BM25 के k1 और b, जिन्हें DPR paper ने 0.9 और 0.4 चुना।",
"h": "11-bm25-dense.html#w-hyperparam"
},
"w-hyperparam": {
"t": "Hyperparameter",
"d": "Formula या model का ऐसा number, जिसे training नहीं बदलती, और जिसे dev set पर आज़माकर चुनते हैं। जैसे BM25 के k1 और b, जिन्हें DPR paper ने 0.9 और 0.4 चुना।",
"h": "11-bm25-dense.html#w-hyperparam"
},
"11-bm25-dense.html#w-inverted": {
"t": "Inverted index",
"d": "हर term के documents की list। जैसे office → office hours page, queue log।",
"h": "11-bm25-dense.html#w-inverted"
},
"w-inverted": {
"t": "Inverted index",
"d": "हर term के documents की list। जैसे office → office hours page, queue log।",
"h": "11-bm25-dense.html#w-inverted"
},
"11-bm25-dense.html#w-sparse": {
"t": "Sparse और dense vector",
"d": "ज़्यादातर 0 वाला लंबा vector, और लगभग पूरा भरा छोटा vector। जैसे forum post के vector की 69 में से 55 जगहें 0 हैं।",
"h": "11-bm25-dense.html#w-sparse"
},
"w-sparse": {
"t": "Sparse और dense vector",
"d": "ज़्यादातर 0 वाला लंबा vector, और लगभग पूरा भरा छोटा vector। जैसे forum post के vector की 69 में से 55 जगहें 0 हैं।",
"h": "11-bm25-dense.html#w-sparse"
},
"12-dpr-dense.html#w-dpr": {
"t": "DPR",
"d": "Dense Passage Retrieval: दो BERT encoders वाला bi-encoder retriever, जो सवाल-passage जोड़ों पर contrastive loss से train होता है। 2020 में Karpukhin और साथियों ने बनाया, और lesson 5 के RAG का retriever यही था।",
"h": "12-dpr-dense.html#w-dpr"
},
"w-dpr": {
"t": "DPR",
"d": "Dense Passage Retrieval: दो BERT encoders वाला bi-encoder retriever, जो सवाल-passage जोड़ों पर contrastive loss से train होता है। 2020 में Karpukhin और साथियों ने बनाया, और lesson 5 के RAG का retriever यही था।",
"h": "12-dpr-dense.html#w-dpr"
},
"12-dpr-dense.html#w-biencoder": {
"t": "Bi-encoder",
"d": "सवाल और passage के लिए दो अलग encoders, और score उनका dot product। Passages पहले से encode होते हैं। जैसे 2.1 करोड़ passages हों, तब भी हर सवाल पर model 1 बार चलता है।",
"h": "12-dpr-dense.html#w-biencoder"
},
"w-biencoder": {
"t": "Bi-encoder",
"d": "सवाल और passage के लिए दो अलग encoders, और score उनका dot product। Passages पहले से encode होते हैं। जैसे 2.1 करोड़ passages हों, तब भी हर सवाल पर model 1 बार चलता है।",
"h": "12-dpr-dense.html#w-biencoder"
},
"12-dpr-dense.html#w-pretraining": {
"t": "Pretraining",
"d": "बहुत सारे आम text पर model की पहली, बड़ी training। जैसे BERT पहले आम text पर train होता है।",
"h": "12-dpr-dense.html#w-pretraining"
},
"w-pretraining": {
"t": "Pretraining",
"d": "बहुत सारे आम text पर model की पहली, बड़ी training। जैसे BERT पहले आम text पर train होता है।",
"h": "12-dpr-dense.html#w-pretraining"
},
"12-dpr-dense.html#w-finetuning": {
"t": "Fine-tuning",
"d": "पहले से trained model को अपने काम के data पर और train करना। जैसे DPR, BERT को सवाल-passage जोड़ों पर train करता है।",
"h": "12-dpr-dense.html#w-finetuning"
},
"w-finetuning": {
"t": "Fine-tuning",
"d": "पहले से trained model को अपने काम के data पर और train करना। जैसे DPR, BERT को सवाल-passage जोड़ों पर train करता है।",
"h": "12-dpr-dense.html#w-finetuning"
},
"12-dpr-dense.html#w-positive": {
"t": "Positive और negative passage",
"d": "सवाल का सही passage (p<sub>i</sub><sup>+</sup>), और गलत passages (p<sub>i,j</sub><sup>−</sup>)। जैसे least crowded सवाल का positive queue log है, और negatives forum post और Homework।",
"h": "12-dpr-dense.html#w-positive"
},
"w-positive": {
"t": "Positive और negative passage",
"d": "सवाल का सही passage (p<sub>i</sub><sup>+</sup>), और गलत passages (p<sub>i,j</sub><sup>−</sup>)। जैसे least crowded सवाल का positive queue log है, और negatives forum post और Homework।",
"h": "12-dpr-dense.html#w-positive"
},
"12-dpr-dense.html#w-contrastive": {
"t": "Contrastive loss",
"d": "Positive और negatives के scores पर softmax, फिर positive का −ln। ये सिर्फ़ scores के फ़र्क देखता है। जैसे scores 1.0, 2.0, 1.5 पर loss 1.68, और 5.0, 2.0, 0.5 पर 0.059।",
"h": "12-dpr-dense.html#w-contrastive"
},
"w-contrastive": {
"t": "Contrastive loss",
"d": "Positive और negatives के scores पर softmax, फिर positive का −ln। ये सिर्फ़ scores के फ़र्क देखता है। जैसे scores 1.0, 2.0, 1.5 पर loss 1.68, और 5.0, 2.0, 0.5 पर 0.059।",
"h": "12-dpr-dense.html#w-contrastive"
},
"12-dpr-dense.html#w-batch": {
"t": "Batch",
"d": "Training में एक साथ चलने वाले सवालों का group। जैसे DPR में 128 सवालों का batch।",
"h": "12-dpr-dense.html#w-batch"
},
"w-batch": {
"t": "Batch",
"d": "Training में एक साथ चलने वाले सवालों का group। जैसे DPR में 128 सवालों का batch।",
"h": "12-dpr-dense.html#w-batch"
},
"12-dpr-dense.html#w-inbatch": {
"t": "In-batch negatives",
"d": "Batch के बाकी सवालों के positives को negatives की तरह इस्तेमाल करना। जैसे 128 के batch में हर सवाल को 127 negatives मिलते हैं।",
"h": "12-dpr-dense.html#w-inbatch"
},
"w-inbatch": {
"t": "In-batch negatives",
"d": "Batch के बाकी सवालों के positives को negatives की तरह इस्तेमाल करना। जैसे 128 के batch में हर सवाल को 127 negatives मिलते हैं।",
"h": "12-dpr-dense.html#w-inbatch"
},
"12-dpr-dense.html#w-hardneg": {
"t": "Hard negative",
"d": "सवाल से मिलता-जुलता, लेकिन गलत passage। DPR इन्हें BM25 के ऊपर वाले passages से लेता है। जैसे इस सवाल पर forum post।",
"h": "12-dpr-dense.html#w-hardneg"
},
"w-hardneg": {
"t": "Hard negative",
"d": "सवाल से मिलता-जुलता, लेकिन गलत passage। DPR इन्हें BM25 के ऊपर वाले passages से लेता है। जैसे इस सवाल पर forum post।",
"h": "12-dpr-dense.html#w-hardneg"
},
"12-dpr-dense.html#w-partial": {
"t": "∂ (partial derivative)",
"d": "बाकी सब वैसा रखकर एक input थोड़ा बदलें, तो output किस दर से बदलता है। जैसे ∂𝓛/∂s<sup>+</sup> = −0.814, यानी queue log का score 0.01 बढ़े, तो loss करीब 0.008 घटता है।",
"h": "12-dpr-dense.html#w-partial"
},
"w-partial": {
"t": "∂ (partial derivative)",
"d": "बाकी सब वैसा रखकर एक input थोड़ा बदलें, तो output किस दर से बदलता है। जैसे ∂𝓛/∂s<sup>+</sup> = −0.814, यानी queue log का score 0.01 बढ़े, तो loss करीब 0.008 घटता है।",
"h": "12-dpr-dense.html#w-partial"
},
"12-dpr-dense.html#w-chainrule": {
"t": "Chain rule (दरों वाला)",
"d": "एक के बाद एक जुड़ी दरें गुणा होती हैं। जैसे queue log के score पर ln Z की दर 2.72 × (1 ÷ 14.59) = 0.186 है। Lesson 4 का probability वाला chain rule इससे अलग है।",
"h": "12-dpr-dense.html#w-chainrule"
},
"w-chainrule": {
"t": "Chain rule (दरों वाला)",
"d": "एक के बाद एक जुड़ी दरें गुणा होती हैं। जैसे queue log के score पर ln Z की दर 2.72 × (1 ÷ 14.59) = 0.186 है। Lesson 4 का probability वाला chain rule इससे अलग है।",
"h": "12-dpr-dense.html#w-chainrule"
},
"12-dpr-dense.html#w-rd": {
"t": "ℝ<sup>d</sup>",
"d": "d real numbers की list, यानी d dimension वाला vector। जैसे [1.0, 0.5, 0.5, 1.0] ∈ ℝ<sup>4</sup>, और DPR के vectors ℝ<sup>768</sup> में हैं।",
"h": "12-dpr-dense.html#w-rd"
},
"w-rd": {
"t": "ℝ<sup>d</sup>",
"d": "d real numbers की list, यानी d dimension वाला vector। जैसे [1.0, 0.5, 0.5, 1.0] ∈ ℝ<sup>4</sup>, और DPR के vectors ℝ<sup>768</sup> में हैं।",
"h": "12-dpr-dense.html#w-rd"
},
"12-dpr-dense.html#w-nabla": {
"t": "∇ (nabla)",
"d": "∇<sub>θ</sub>𝓛: θ के हर parameter पर loss की दर, एक list में। Training हर parameter को उसकी दर की उल्टी दिशा में थोड़ा खिसकाती है। जैसे तीन scores पर ये दरें −0.814, +0.506 और +0.307 थीं।",
"h": "12-dpr-dense.html#w-nabla"
},
"w-nabla": {
"t": "∇ (nabla)",
"d": "∇<sub>θ</sub>𝓛: θ के हर parameter पर loss की दर, एक list में। Training हर parameter को उसकी दर की उल्टी दिशा में थोड़ा खिसकाती है। जैसे तीन scores पर ये दरें −0.814, +0.506 और +0.307 थीं।",
"h": "12-dpr-dense.html#w-nabla"
},
"12-dpr-dense.html#w-faiss": {
"t": "FAISS",
"d": "Vectors में तेज़ search की open-source library। जैसे DPR ने इसमें 2.1 करोड़ vectors का HNSW index बनाया, जिसमें करीब 8.5 घंटे लगे।",
"h": "12-dpr-dense.html#w-faiss"
},
"w-faiss": {
"t": "FAISS",
"d": "Vectors में तेज़ search की open-source library। जैसे DPR ने इसमें 2.1 करोड़ vectors का HNSW index बनाया, जिसमें करीब 8.5 घंटे लगे।",
"h": "12-dpr-dense.html#w-faiss"
},
"12-dpr-dense.html#w-orqa": {
"t": "ORQA",
"d": "2019 का dense retriever, जिसने retriever को extra pretraining से सिखाया। जैसे NQ पर पूरे system का Exact Match ORQA के साथ 33.3, और DPR के साथ 41.5।",
"h": "12-dpr-dense.html#w-orqa"
},
"w-orqa": {
"t": "ORQA",
"d": "2019 का dense retriever, जिसने retriever को extra pretraining से सिखाया। जैसे NQ पर पूरे system का Exact Match ORQA के साथ 33.3, और DPR के साथ 41.5।",
"h": "12-dpr-dense.html#w-orqa"
},
"12-dpr-dense.html#w-topkacc": {
"t": "Top-k retrieval accuracy",
"d": "कितने % सवालों में top-k में जवाब वाला passage है। जैसे NQ पर top-20 में DPR की 78.4%।",
"h": "12-dpr-dense.html#w-topkacc"
},
"w-topkacc": {
"t": "Top-k retrieval accuracy",
"d": "कितने % सवालों में top-k में जवाब वाला passage है। जैसे NQ पर top-20 में DPR की 78.4%।",
"h": "12-dpr-dense.html#w-topkacc"
},
"13-metrics-dense.html#w-labels": {
"t": "Relevance labels",
"d": "हर query के लिए पहले से तय सही passages, कभी grades के साथ। जैसे q1 के लिए queue log (grade 3) और office hours page (grade 1)।",
"h": "13-metrics-dense.html#w-labels"
},
"w-labels": {
"t": "Relevance labels",
"d": "हर query के लिए पहले से तय सही passages, कभी grades के साथ। जैसे q1 के लिए queue log (grade 3) और office hours page (grade 1)।",
"h": "13-metrics-dense.html#w-labels"
},
"13-metrics-dense.html#w-set": {
"t": "Set, ∩, ∅, |A|",
"d": "चीज़ों का group, दो sets की common चीज़ें, खाली set, और set में कितनी चीज़ें हैं। जैसे |{queue log, office hours page}| = 2, और q3 पर R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) = ∅।",
"h": "13-metrics-dense.html#w-set"
},
"w-set": {
"t": "Set, ∩, ∅, |A|",
"d": "चीज़ों का group, दो sets की common चीज़ें, खाली set, और set में कितनी चीज़ें हैं। जैसे |{queue log, office hours page}| = 2, और q3 पर R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) = ∅।",
"h": "13-metrics-dense.html#w-set"
},
"13-metrics-dense.html#w-indicator": {
"t": "𝟙[शर्त]",
"d": "शर्त सच हो तो 1, नहीं तो 0। जैसे q3 के top-3 में कोई सही passage नहीं है, तो 𝟙[R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) ≠ ∅] = 0।",
"h": "13-metrics-dense.html#w-indicator"
},
"w-indicator": {
"t": "𝟙[शर्त]",
"d": "शर्त सच हो तो 1, नहीं तो 0। जैसे q3 के top-3 में कोई सही passage नहीं है, तो 𝟙[R<sub>q3</sub> ∩ Top<sub>3</sub>(q3) ≠ ∅] = 0।",
"h": "13-metrics-dense.html#w-indicator"
},
"13-metrics-dense.html#w-hitk": {
"t": "Hit@k",
"d": "कितने हिस्से queries में top-k में कम से कम एक सही passage है। जैसे k = 3 पर 3 में से 2 queries, यानी 0.667।",
"h": "13-metrics-dense.html#w-hitk"
},
"w-hitk": {
"t": "Hit@k",
"d": "कितने हिस्से queries में top-k में कम से कम एक सही passage है। जैसे k = 3 पर 3 में से 2 queries, यानी 0.667।",
"h": "13-metrics-dense.html#w-hitk"
},
"13-metrics-dense.html#w-failedk": {
"t": "Failed@k",
"d": "1 − Hit@k, यानी कितने हिस्से queries में top-k में एक भी सही passage नहीं। जैसे Failed@3 = 1 − 0.667 = 0.333।",
"h": "13-metrics-dense.html#w-failedk"
},
"w-failedk": {
"t": "Failed@k",
"d": "1 − Hit@k, यानी कितने हिस्से queries में top-k में एक भी सही passage नहीं। जैसे Failed@3 = 1 − 0.667 = 0.333।",
"h": "13-metrics-dense.html#w-failedk"
},
"13-metrics-dense.html#w-mrr": {
"t": "MRR@k",
"d": "पहले सही passage के rank का उल्टा (1 ÷ rank), queries का औसत, और top-k में न हो तो 0। जैसे ranks 1, 2 और कोई नहीं, तो (1 + 0.5 + 0) ÷ 3 = 0.5।",
"h": "13-metrics-dense.html#w-mrr"
},
"w-mrr": {
"t": "MRR@k",
"d": "पहले सही passage के rank का उल्टा (1 ÷ rank), queries का औसत, और top-k में न हो तो 0। जैसे ranks 1, 2 और कोई नहीं, तो (1 + 0.5 + 0) ÷ 3 = 0.5।",
"h": "13-metrics-dense.html#w-mrr"
},
"13-metrics-dense.html#w-recallk": {
"t": "Recall@k",
"d": "Top-k में मिले सही passages ÷ कुल सही passages, queries का औसत। जैसे k = 1 पर q1 में 2 में से 1 मिला, तो 0.5।",
"h": "13-metrics-dense.html#w-recallk"
},
"w-recallk": {
"t": "Recall@k",
"d": "Top-k में मिले सही passages ÷ कुल सही passages, queries का औसत। जैसे k = 1 पर q1 में 2 में से 1 मिला, तो 0.5।",
"h": "13-metrics-dense.html#w-recallk"
},
"13-metrics-dense.html#w-log2": {
"t": "log<sub>2</sub>",
"d": "2 को किस power तक उठाएँ कि number मिले। जैसे log<sub>2</sub> 4 = 2, और log<sub>2</sub> 3 = 1.585।",
"h": "13-metrics-dense.html#w-log2"
},
"w-log2": {
"t": "log<sub>2</sub>",
"d": "2 को किस power तक उठाएँ कि number मिले। जैसे log<sub>2</sub> 4 = 2, और log<sub>2</sub> 3 = 1.585।",
"h": "13-metrics-dense.html#w-log2"
},
"13-metrics-dense.html#w-dcg": {
"t": "DCG और IDCG",
"d": "हर rank का grade ÷ log<sub>2</sub>(rank + 1), फिर जोड़। IDCG सबसे अच्छे क्रम का DCG। जैसे q1 का क्रम queue log (3), forum post (0), office hours page (1): DCG 3.5, IDCG 3.631।",
"h": "13-metrics-dense.html#w-dcg"
},
"w-dcg": {
"t": "DCG और IDCG",
"d": "हर rank का grade ÷ log<sub>2</sub>(rank + 1), फिर जोड़। IDCG सबसे अच्छे क्रम का DCG। जैसे q1 का क्रम queue log (3), forum post (0), office hours page (1): DCG 3.5, IDCG 3.631।",
"h": "13-metrics-dense.html#w-dcg"
},
"13-metrics-dense.html#w-ndcg": {
"t": "nDCG@k",
"d": "DCG ÷ IDCG, 0 से 1 के बीच, जो grade और क्रम दोनों देखता है। जैसे q1 के उलटे क्रम पर 2.5 ÷ 3.631 = 0.689।",
"h": "13-metrics-dense.html#w-ndcg"
},
"w-ndcg": {
"t": "nDCG@k",
"d": "DCG ÷ IDCG, 0 से 1 के बीच, जो grade और क्रम दोनों देखता है। जैसे q1 के उलटे क्रम पर 2.5 ÷ 3.631 = 0.689।",
"h": "13-metrics-dense.html#w-ndcg"
},
"13-metrics-dense.html#w-subset": {
"t": "⊆ (subset)",
"d": "A ⊆ B का मतलब है कि A की हर चीज़ B में भी है। जैसे Top<sub>3</sub>(q1) ⊆ Top<sub>5</sub>(q1), इसलिए Recall@5 कभी Recall@3 से कम नहीं होता।",
"h": "13-metrics-dense.html#w-subset"
},
"w-subset": {
"t": "⊆ (subset)",
"d": "A ⊆ B का मतलब है कि A की हर चीज़ B में भी है। जैसे Top<sub>3</sub>(q1) ⊆ Top<sub>5</sub>(q1), इसलिए Recall@5 कभी Recall@3 से कम नहीं होता।",
"h": "13-metrics-dense.html#w-subset"
},
"13-metrics-dense.html#w-harmonic": {
"t": "Harmonic series",
"d": "1 + 1/2 + 1/3 + …, यानी 1 ÷ rank वाले numbers, जो MRR में आते हैं। इनका जोड़ धीरे बढ़ता है, करीब ln n + 0.577, जैसे पहले 1,000 numbers का जोड़ 7.485।",
"h": "13-metrics-dense.html#w-harmonic"
},
"w-harmonic": {
"t": "Harmonic series",
"d": "1 + 1/2 + 1/3 + …, यानी 1 ÷ rank वाले numbers, जो MRR में आते हैं। इनका जोड़ धीरे बढ़ता है, करीब ln n + 0.577, जैसे पहले 1,000 numbers का जोड़ 7.485।",
"h": "13-metrics-dense.html#w-harmonic"
},
"13-metrics-dense.html#w-points": {
"t": "Points (absolute फ़र्क)",
"d": "दो % numbers का सीधा फ़र्क। जैसे 52.2 से 54.0 = 1.8 points, जबकि 52.2 के हिसाब से ये करीब 3.45% की बढ़त है।",
"h": "13-metrics-dense.html#w-points"
},
"w-points": {
"t": "Points (absolute फ़र्क)",
"d": "दो % numbers का सीधा फ़र्क। जैसे 52.2 से 54.0 = 1.8 points, जबकि 52.2 के हिसाब से ये करीब 3.45% की बढ़त है।",
"h": "13-metrics-dense.html#w-points"
},
"13-metrics-dense.html#w-qrels": {
"t": "QRels",
"d": "Relevance labels की file: हर query के लिए सही documents के IDs। जैसे late chunking paper ने nDCG@10 इसी file से निकाला।",
"h": "13-metrics-dense.html#w-qrels"
},
"w-qrels": {
"t": "QRels",
"d": "Relevance labels की file: हर query के लिए सही documents के IDs। जैसे late chunking paper ने nDCG@10 इसी file से निकाला।",
"h": "13-metrics-dense.html#w-qrels"
},
"14-hybrid-rerank-dense.html#w-paraphrase": {
"t": "Paraphrase",
"d": "वही बात अलग शब्दों में। जैसे upload failed और upload keeps failing। BM25 इसे चूकता है, क्योंकि वो एक जैसे शब्द गिनता है।",
"h": "14-hybrid-rerank-dense.html#w-paraphrase"
},
"w-paraphrase": {
"t": "Paraphrase",
"d": "वही बात अलग शब्दों में। जैसे upload failed और upload keeps failing। BM25 इसे चूकता है, क्योंकि वो एक जैसे शब्द गिनता है।",
"h": "14-hybrid-rerank-dense.html#w-paraphrase"
},
"14-hybrid-rerank-dense.html#w-literal": {
"t": "Literal",
"d": "ऐसा text, जो हूबहू मिलना चाहिए, जैसे error code E-4012 या order ID A77-310। Dense retriever इसे चूक सकता है, और BM25 इसे rare शब्द मानकर पकड़ता है।",
"h": "14-hybrid-rerank-dense.html#w-literal"
},
"w-literal": {
"t": "Literal",
"d": "ऐसा text, जो हूबहू मिलना चाहिए, जैसे error code E-4012 या order ID A77-310। Dense retriever इसे चूक सकता है, और BM25 इसे rare शब्द मानकर पकड़ता है।",
"h": "14-hybrid-rerank-dense.html#w-literal"
},
"14-hybrid-rerank-dense.html#w-hybrid": {
"t": "Hybrid search",
"d": "दोनों retrievers, शब्दों वाला और dense, चलाकर उनकी lists मिलाना। जैसे BM25 की E1, E3, E2 और dense की E2, E1, E3 से एक list बनाना।",
"h": "14-hybrid-rerank-dense.html#w-hybrid"
},
"w-hybrid": {
"t": "Hybrid search",
"d": "दोनों retrievers, शब्दों वाला और dense, चलाकर उनकी lists मिलाना। जैसे BM25 की E1, E3, E2 और dense की E2, E1, E3 से एक list बनाना।",
"h": "14-hybrid-rerank-dense.html#w-hybrid"
},
"14-hybrid-rerank-dense.html#w-rrf": {
"t": "Reciprocal rank fusion (RRF)",
"d": "हर list में passage के rank से 1 ÷ (k + rank), फिर सारी lists का जोड़, जहाँ k = 60। जैसे E1: 1 ÷ 61 + 1 ÷ 62 = 0.03252।",
"h": "14-hybrid-rerank-dense.html#w-rrf"
},
"w-rrf": {
"t": "Reciprocal rank fusion (RRF)",
"d": "हर list में passage के rank से 1 ÷ (k + rank), फिर सारी lists का जोड़, जहाँ k = 60। जैसे E1: 1 ÷ 61 + 1 ÷ 62 = 0.03252।",
"h": "14-hybrid-rerank-dense.html#w-rrf"
},
"14-hybrid-rerank-dense.html#w-attention": {
"t": "Attention",
"d": "हर token बाकी tokens के vectors का वज़न वाला औसत लेकर अपना नया vector बनाता है, और वज़नों का जोड़ 1 होता है। जैसे crowded [0.5, 0.5] averaged [1.0, 0.0] को 0.6 वज़न दे, तो [0.8, 0.2] बनता है।",
"h": "14-hybrid-rerank-dense.html#w-attention"
},
"w-attention": {
"t": "Attention",
"d": "हर token बाकी tokens के vectors का वज़न वाला औसत लेकर अपना नया vector बनाता है, और वज़नों का जोड़ 1 होता है। जैसे crowded [0.5, 0.5] averaged [1.0, 0.0] को 0.6 वज़न दे, तो [0.8, 0.2] बनता है।",
"h": "14-hybrid-rerank-dense.html#w-attention"
},
"14-hybrid-rerank-dense.html#w-crossenc": {
"t": "Cross-encoder",
"d": "Query और passage को जोड़कर एक model में डालने वाला reranker, जो जोड़ी का सीधा score देता है। ये हर passage पर पूरा चलता है, जैसे BERT-base में 10.7 ms per passage।",
"h": "14-hybrid-rerank-dense.html#w-crossenc"
},
"w-crossenc": {
"t": "Cross-encoder",
"d": "Query और passage को जोड़कर एक model में डालने वाला reranker, जो जोड़ी का सीधा score देता है। ये हर passage पर पूरा चलता है, जैसे BERT-base में 10.7 ms per passage।",
"h": "14-hybrid-rerank-dense.html#w-crossenc"
},
"14-hybrid-rerank-dense.html#w-reranking": {
"t": "Reranking",
"d": "तेज़ retriever की shortlist को सटीक model से दोबारा score देकर sort करना। जैसे MS MARCO पर MRR@10 BM25 अकेले 16.7, और BERT-base से rerank के बाद 34.7।",
"h": "14-hybrid-rerank-dense.html#w-reranking"
},
"w-reranking": {
"t": "Reranking",
"d": "तेज़ retriever की shortlist को सटीक model से दोबारा score देकर sort करना। जैसे MS MARCO पर MRR@10 BM25 अकेले 16.7, और BERT-base से rerank के बाद 34.7।",
"h": "14-hybrid-rerank-dense.html#w-reranking"
},
"14-hybrid-rerank-dense.html#w-shortlist": {
"t": "Shortlist",
"d": "Retriever के ऊपर के कुछ passages, जिन पर reranker चलता है। जैसे 60,000 passages में से top-100, जिन पर cross-encoder 1,070 ms लेता है।",
"h": "14-hybrid-rerank-dense.html#w-shortlist"
},
"w-shortlist": {
"t": "Shortlist",
"d": "Retriever के ऊपर के कुछ passages, जिन पर reranker चलता है। जैसे 60,000 passages में से top-100, जिन पर cross-encoder 1,070 ms लेता है।",
"h": "14-hybrid-rerank-dense.html#w-shortlist"
},
"14-hybrid-rerank-dense.html#w-minmax": {
"t": "Min-max normalisation",
"d": "हर list के scores को (x − min) ÷ (max − min) से 0 से 1 पर लाना। जैसे BM25 के 7.2, 3.1 और 1.0 से 1, 0.339 और 0। नतीजा list के min और max पर टिका है।",
"h": "14-hybrid-rerank-dense.html#w-minmax"
},
"w-minmax": {
"t": "Min-max normalisation",
"d": "हर list के scores को (x − min) ÷ (max − min) से 0 से 1 पर लाना। जैसे BM25 के 7.2, 3.1 और 1.0 से 1, 0.339 और 0। नतीजा list के min और max पर टिका है।",
"h": "14-hybrid-rerank-dense.html#w-minmax"
},
"14-hybrid-rerank-dense.html#w-cls": {
"t": "[CLS] और [SEP]",
"d": "BERT के input के खास tokens। [CLS] सबसे आगे आता है, और cross-encoder में उसका आख़िरी vector पूरी जोड़ी की बात रखता है। [SEP] query और passage को अलग करता है, जैसे [CLS] query [SEP] passage [SEP]।",
"h": "14-hybrid-rerank-dense.html#w-cls"
},
"w-cls": {
"t": "[CLS] और [SEP]",
"d": "BERT के input के खास tokens। [CLS] सबसे आगे आता है, और cross-encoder में उसका आख़िरी vector पूरी जोड़ी की बात रखता है। [SEP] query और passage को अलग करता है, जैसे [CLS] query [SEP] passage [SEP]।",
"h": "14-hybrid-rerank-dense.html#w-cls"
},
"15-colbert-dense.html#w-late": {
"t": "Late interaction",
"d": "Query और passage के token vectors अलग-अलग बनें, और सिर्फ़ scoring पर मिलें। जैसे ColBERT में passage के vectors offline बनते हैं, और dot products query आने पर।",
"h": "15-colbert-dense.html#w-late"
},
"w-late": {
"t": "Late interaction",
"d": "Query और passage के token vectors अलग-अलग बनें, और सिर्फ़ scoring पर मिलें। जैसे ColBERT में passage के vectors offline बनते हैं, और dot products query आने पर।",
"h": "15-colbert-dense.html#w-late"
},
"15-colbert-dense.html#w-maxsim": {
"t": "MaxSim",
"d": "Query के हर token का passage के tokens से सबसे बड़ा dot product, फिर सबका जोड़। जैसे course FAQ पर 0.9 + 0.95 = 1.85।",
"h": "15-colbert-dense.html#w-maxsim"
},
"w-maxsim": {
"t": "MaxSim",
"d": "Query के हर token का passage के tokens से सबसे बड़ा dot product, फिर सबका जोड़। जैसे course FAQ पर 0.9 + 0.95 = 1.85।",
"h": "15-colbert-dense.html#w-maxsim"
},
"15-colbert-dense.html#w-colbert": {
"t": "ColBERT",
"d": "Late interaction वाला retriever, जो हर token का vector रखता है और MaxSim से score देता है। 2020 में Khattab और Zaharia ने बनाया। जैसे MS MARCO पर उसका Recall@1000 96.8 है।",
"h": "15-colbert-dense.html#w-colbert"
},
"w-colbert": {
"t": "ColBERT",
"d": "Late interaction वाला retriever, जो हर token का vector रखता है और MaxSim से score देता है। 2020 में Khattab और Zaharia ने बनाया। जैसे MS MARCO पर उसका Recall@1000 96.8 है।",
"h": "15-colbert-dense.html#w-colbert"
},
"15-colbert-dense.html#w-latency": {
"t": "Latency",
"d": "Query भेजने से जवाब आने तक का समय, ms में। जैसे cross-encoder की latency 1,000 passages पर 10,700 ms है, और ColBERT rerank की 61 ms।",
"h": "15-colbert-dense.html#w-latency"
},
"w-latency": {
"t": "Latency",
"d": "Query भेजने से जवाब आने तक का समय, ms में। जैसे cross-encoder की latency 1,000 passages पर 10,700 ms है, और ColBERT rerank की 61 ms।",
"h": "15-colbert-dense.html#w-latency"
},
"15-colbert-dense.html#w-flops": {
"t": "FLOPs",
"d": "कितने गुणा और जोड़ लगे, यानी computer का काम। जैसे 3 numbers वाले dot product में 6 FLOPs, और 768 numbers वाले में 1,536।",
"h": "15-colbert-dense.html#w-flops"
},
"w-flops": {
"t": "FLOPs",
"d": "कितने गुणा और जोड़ लगे, यानी computer का काम। जैसे 3 numbers वाले dot product में 6 FLOPs, और 768 numbers वाले में 1,536।",
"h": "15-colbert-dense.html#w-flops"
},
"15-colbert-dense.html#w-cascade": {
"t": "Cascade",
"d": "Retrievers की line, जिसमें हर अगला step कम passages पर ज़्यादा सटीक और महँगा काम करता है। जैसे करोड़ों से 1,000, फिर 50, फिर 5।",
"h": "15-colbert-dense.html#w-cascade"
},
"w-cascade": {
"t": "Cascade",
"d": "Retrievers की line, जिसमें हर अगला step कम passages पर ज़्यादा सटीक और महँगा काम करता है। जैसे करोड़ों से 1,000, फिर 50, फिर 5।",
"h": "15-colbert-dense.html#w-cascade"
},
"15-colbert-dense.html#w-intmatrix": {
"t": "Interaction matrix",
"d": "Query के हर token और passage के हर token की similarity की table। जैसे FAQ वाली table में 6 × 2 = 12 dot products।",
"h": "15-colbert-dense.html#w-intmatrix"
},
"w-intmatrix": {
"t": "Interaction matrix",
"d": "Query के हर token और passage के हर token की similarity की table। जैसे FAQ वाली table में 6 × 2 = 12 dot products।",
"h": "15-colbert-dense.html#w-intmatrix"
},
"15-colbert-dense.html#w-queryaug": {
"t": "Query augmentation",
"d": "Query को [mask] tokens से 32 tokens तक भरना। BERT इनके भी vectors बनाता है, और वो MaxSim में extra query tokens की तरह जुड़ते हैं।",
"h": "15-colbert-dense.html#w-queryaug"
},
"w-queryaug": {
"t": "Query augmentation",
"d": "Query को [mask] tokens से 32 tokens तक भरना। BERT इनके भी vectors बनाता है, और वो MaxSim में extra query tokens की तरह जुड़ते हैं।",
"h": "15-colbert-dense.html#w-queryaug"
},
"15-colbert-dense.html#w-gib": {
"t": "GiB",
"d": "2<sup>30</sup> = 1,07,37,41,824 bytes, यानी GB से करीब 7% बड़ा। जैसे MS MARCO पर ColBERT का index 286 GiB है।",
"h": "15-colbert-dense.html#w-gib"
},
"w-gib": {
"t": "GiB",
"d": "2<sup>30</sup> = 1,07,37,41,824 bytes, यानी GB से करीब 7% बड़ा। जैसे MS MARCO पर ColBERT का index 286 GiB है।",
"h": "15-colbert-dense.html#w-gib"
},
"15-colbert-dense.html#w-candgen": {
"t": "Candidate generation",
"d": "सस्ते तरीके से उम्मीदवार passages निकालना, ताकि महँगा हिसाब सिर्फ़ उन पर चले। जैसे ColBERT में हर query vector के top-1,000 token vectors, यानी ज़्यादा से ज़्यादा 32,000 passages।",
"h": "15-colbert-dense.html#w-candgen"
},
"w-candgen": {
"t": "Candidate generation",
"d": "सस्ते तरीके से उम्मीदवार passages निकालना, ताकि महँगा हिसाब सिर्फ़ उन पर चले। जैसे ColBERT में हर query vector के top-1,000 token vectors, यानी ज़्यादा से ज़्यादा 32,000 passages।",
"h": "15-colbert-dense.html#w-candgen"
},
"16-agentic-rag-dense.html#w-agent": {
"t": "Agent",
"d": "Loop में काम करने वाला LLM, जो action चुनता है, observation पढ़ता है, और अगला action तय करता है। जैसे <q>OH timings</q> की search खाली आई, तो agent ने नई query लिखी।",
"h": "16-agentic-rag-dense.html#w-agent"
},
"w-agent": {
"t": "Agent",
"d": "Loop में काम करने वाला LLM, जो action चुनता है, observation पढ़ता है, और अगला action तय करता है। जैसे <q>OH timings</q> की search खाली आई, तो agent ने नई query लिखी।",
"h": "16-agentic-rag-dense.html#w-agent"
},
"16-agentic-rag-dense.html#w-action": {
"t": "Action और tool",
"d": "Agent का चुना काम, जैसे <q>OH timings</q> search करना। Tool वो program है, जो ये काम करता है, जैसे search engine।",
"h": "16-agentic-rag-dense.html#w-action"
},
"w-action": {
"t": "Action और tool",
"d": "Agent का चुना काम, जैसे <q>OH timings</q> search करना। Tool वो program है, जो ये काम करता है, जैसे search engine।",
"h": "16-agentic-rag-dense.html#w-action"
},
"16-agentic-rag-dense.html#w-observation": {
"t": "Observation",
"d": "Action का नतीजा, जो agent अगले कदम से पहले पढ़ता है। जैसे पहली search का नतीजा: हर passage का score 0।",
"h": "16-agentic-rag-dense.html#w-observation"
},
"w-observation": {
"t": "Observation",
"d": "Action का नतीजा, जो agent अगले कदम से पहले पढ़ता है। जैसे पहली search का नतीजा: हर passage का score 0।",
"h": "16-agentic-rag-dense.html#w-observation"
},
"16-agentic-rag-dense.html#w-agentic": {
"t": "Agentic RAG",
"d": "RAG, जिसमें ढूँढना agent का action है, pipeline का तय step नहीं। जैसे 17 × 3 पर 0 searches, और Jed Hoyer वाले सवाल पर 3।",
"h": "16-agentic-rag-dense.html#w-agentic"
},
"w-agentic": {
"t": "Agentic RAG",
"d": "RAG, जिसमें ढूँढना agent का action है, pipeline का तय step नहीं। जैसे 17 × 3 पर 0 searches, और Jed Hoyer वाले सवाल पर 3।",
"h": "16-agentic-rag-dense.html#w-agentic"
},
"16-agentic-rag-dense.html#w-selfrag": {
"t": "Self-RAG",
"d": "Generator खुद reflection tokens लिखकर तय करता है कि कब ढूँढना है, और कौन सा हिस्सा रखना है। जैसे forum post वाले हिस्से पर Relevant और Partially।",
"h": "16-agentic-rag-dense.html#w-selfrag"
},
"w-selfrag": {
"t": "Self-RAG",
"d": "Generator खुद reflection tokens लिखकर तय करता है कि कब ढूँढना है, और कौन सा हिस्सा रखना है। जैसे forum post वाले हिस्से पर Relevant और Partially।",
"h": "16-agentic-rag-dense.html#w-selfrag"
},
"16-agentic-rag-dense.html#w-reflection": {
"t": "Reflection tokens",
"d": "Vocabulary में जोड़े गए खास tokens, जिन्हें model बाकी text की तरह लिखता है। जैसे Retrieve, Relevant या Irrelevant, और Supported या Partially।",
"h": "16-agentic-rag-dense.html#w-reflection"
},
"w-reflection": {
"t": "Reflection tokens",
"d": "Vocabulary में जोड़े गए खास tokens, जिन्हें model बाकी text की तरह लिखता है। जैसे Retrieve, Relevant या Irrelevant, और Supported या Partially।",
"h": "16-agentic-rag-dense.html#w-reflection"
},
"16-agentic-rag-dense.html#w-crag": {
"t": "CRAG",
"d": "Corrective RAG: एक evaluator retrieval को Correct, Incorrect या Ambiguous कहता है, और उसी हिसाब से refinement, web search या दोनों चलते हैं। जैसे 0.4 वाला forum post Ambiguous है।",
"h": "16-agentic-rag-dense.html#w-crag"
},
"w-crag": {
"t": "CRAG",
"d": "Corrective RAG: एक evaluator retrieval को Correct, Incorrect या Ambiguous कहता है, और उसी हिसाब से refinement, web search या दोनों चलते हैं। जैसे 0.4 वाला forum post Ambiguous है।",
"h": "16-agentic-rag-dense.html#w-crag"
},
"16-agentic-rag-dense.html#w-evaluator": {
"t": "Retrieval evaluator",
"d": "सवाल और एक document पढ़कर confidence देने वाला हल्का model। जैसे K = 1 पर forum post को 0.4।",
"h": "16-agentic-rag-dense.html#w-evaluator"
},
"w-evaluator": {
"t": "Retrieval evaluator",
"d": "सवाल और एक document पढ़कर confidence देने वाला हल्का model। जैसे K = 1 पर forum post को 0.4।",
"h": "16-agentic-rag-dense.html#w-evaluator"
},
"16-agentic-rag-dense.html#w-refine": {
"t": "Knowledge refinement",
"d": "Documents को strips में तोड़ना, बेकार strips हटाना, और बाकी को क्रम से जोड़ना। जैसे milestone वाले सवाल पर syllabus की 3 में से 2 strips रहती हैं।",
"h": "16-agentic-rag-dense.html#w-refine"
},
"w-refine": {
"t": "Knowledge refinement",
"d": "Documents को strips में तोड़ना, बेकार strips हटाना, और बाकी को क्रम से जोड़ना। जैसे milestone वाले सवाल पर syllabus की 3 में से 2 strips रहती हैं।",
"h": "16-agentic-rag-dense.html#w-refine"
},
"16-agentic-rag-dense.html#w-threshold": {
"t": "Threshold",
"d": "पहले से तय limit, जिसके ऊपर या नीचे होने पर अलग action चलता है। जैसे CRAG में 0.6 से ऊपर Correct, और 0.2 से नीचे Incorrect।",
"h": "16-agentic-rag-dense.html#w-threshold"
},
"w-threshold": {
"t": "Threshold",
"d": "पहले से तय limit, जिसके ऊपर या नीचे होने पर अलग action चलता है। जैसे CRAG में 0.6 से ऊपर Correct, और 0.2 से नीचे Incorrect।",
"h": "16-agentic-rag-dense.html#w-threshold"
},
"16-agentic-rag-dense.html#w-critic": {
"t": "Critic",
"d": "किसी और के लिखे या लाए को grade देने वाला model। जैसे Self-RAG में Llama 2 7B का critic training data में reflection tokens लगाता है, और CRAG की slide अपने evaluator को critic कहती है।",
"h": "16-agentic-rag-dense.html#w-critic"
},
"w-critic": {
"t": "Critic",
"d": "किसी और के लिखे या लाए को grade देने वाला model। जैसे Self-RAG में Llama 2 7B का critic training data में reflection tokens लगाता है, और CRAG की slide अपने evaluator को critic कहती है।",
"h": "16-agentic-rag-dense.html#w-critic"
},
"16-agentic-rag-dense.html#w-segscore": {
"t": "Segment score (Self-RAG)",
"d": "हर हिस्से के critique हिस्सों का वज़न वाला जोड़: S = 1.0 × s<sub>IsRel</sub> + 1.0 × s<sub>IsSup</sub> + 0.5 × s<sub>IsUse</sub>। जैसे queue log वाले हिस्से का S = 0.9 + 0.875 + 0.5 × 0.75 = 2.15।",
"h": "16-agentic-rag-dense.html#w-segscore"
},
"w-segscore": {
"t": "Segment score (Self-RAG)",
"d": "हर हिस्से के critique हिस्सों का वज़न वाला जोड़: S = 1.0 × s<sub>IsRel</sub> + 1.0 × s<sub>IsSup</sub> + 0.5 × s<sub>IsUse</sub>। जैसे queue log वाले हिस्से का S = 0.9 + 0.875 + 0.5 × 0.75 = 2.15।",
"h": "16-agentic-rag-dense.html#w-segscore"
},
"16-agentic-rag-dense.html#w-beam": {
"t": "Beam search",
"d": "हर कदम पर सबसे ऊँचे score वाले B अधूरे जवाब रखकर आगे बढ़ना। जैसे B = 2 पर queue log (2.15) और forum post (1.475) वाले जवाब अगले कदम तक रहते हैं, और Homework (0.425) छूटता है।",
"h": "16-agentic-rag-dense.html#w-beam"
},
"w-beam": {
"t": "Beam search",
"d": "हर कदम पर सबसे ऊँचे score वाले B अधूरे जवाब रखकर आगे बढ़ना। जैसे B = 2 पर queue log (2.15) और forum post (1.475) वाले जवाब अगले कदम तक रहते हैं, और Homework (0.425) छूटता है।",
"h": "16-agentic-rag-dense.html#w-beam"
},
"17-search-r1-dense.html#w-rl": {
"t": "Reinforcement learning (RL)",
"d": "कोशिशें करके, हर कोशिश के reward से सीखना। जैसे 4 rollouts में 2 का reward 1 है, तो उन दोनों के tokens की probability बढ़ती है।",
"h": "17-search-r1-dense.html#w-rl"
},
"w-rl": {
"t": "Reinforcement learning (RL)",
"d": "कोशिशें करके, हर कोशिश के reward से सीखना। जैसे 4 rollouts में 2 का reward 1 है, तो उन दोनों के tokens की probability बढ़ती है।",
"h": "17-search-r1-dense.html#w-rl"
},
"17-search-r1-dense.html#w-policy": {
"t": "Policy",
"d": "जो हर कदम पर फ़ैसला लेता है। यहाँ LLM, जो हर बार अगला token चुनता है: सोचना, &lt;search&gt; या &lt;answer&gt;।",
"h": "17-search-r1-dense.html#w-policy"
},
"w-policy": {
"t": "Policy",
"d": "जो हर कदम पर फ़ैसला लेता है। यहाँ LLM, जो हर बार अगला token चुनता है: सोचना, &lt;search&gt; या &lt;answer&gt;।",
"h": "17-search-r1-dense.html#w-policy"
},
"17-search-r1-dense.html#w-rollout": {
"t": "Rollout (trajectory)",
"d": "एक सवाल पर शुरू से आख़िरी जवाब तक की एक पूरी कोशिश। जैसे Hoyer वाले सवाल पर o<sub>1</sub>: दोनों तारीखें search कीं, फिर जवाब दिया।",
"h": "17-search-r1-dense.html#w-rollout"
},
"w-rollout": {
"t": "Rollout (trajectory)",
"d": "एक सवाल पर शुरू से आख़िरी जवाब तक की एक पूरी कोशिश। जैसे Hoyer वाले सवाल पर o<sub>1</sub>: दोनों तारीखें search कीं, फिर जवाब दिया।",
"h": "17-search-r1-dense.html#w-rollout"
},
"17-search-r1-dense.html#w-reward": {
"t": "Reward",
"d": "Rollout के आख़िर में मिला number। जैसे जवाब हूबहू सही हो तो 1, नहीं तो 0।",
"h": "17-search-r1-dense.html#w-reward"
},
"w-reward": {
"t": "Reward",
"d": "Rollout के आख़िर में मिला number। जैसे जवाब हूबहू सही हो तो 1, नहीं तो 0।",
"h": "17-search-r1-dense.html#w-reward"
},
"17-search-r1-dense.html#w-searchr1": {
"t": "Search-R1",
"d": "LLM को RL से search के फ़ैसले सिखाने वाला तरीका, think, search, information और answer tags के साथ। Reward सिर्फ़ आख़िरी जवाब पर लगता है।",
"h": "17-search-r1-dense.html#w-searchr1"
},
"w-searchr1": {
"t": "Search-R1",
"d": "LLM को RL से search के फ़ैसले सिखाने वाला तरीका, think, search, information और answer tags के साथ। Reward सिर्फ़ आख़िरी जवाब पर लगता है।",
"h": "17-search-r1-dense.html#w-searchr1"
},
"17-search-r1-dense.html#w-advantage": {
"t": "Advantage",
"d": "Rollout उम्मीद से कितना बेहतर या बुरा रहा। जैसे rewards 0, 0, 0, 1 में o<sub>4</sub> का +1.73, और बाकी तीन का −0.58।",
"h": "17-search-r1-dense.html#w-advantage"
},
"w-advantage": {
"t": "Advantage",
"d": "Rollout उम्मीद से कितना बेहतर या बुरा रहा। जैसे rewards 0, 0, 0, 1 में o<sub>4</sub> का +1.73, और बाकी तीन का −0.58।",
"h": "17-search-r1-dense.html#w-advantage"
},
"17-search-r1-dense.html#w-ppo": {
"t": "PPO और value model",
"d": "RL का आम तरीका, जो आगे के reward का अंदाज़ा लगाने वाला अलग model (value model) train करता है। जैसे अंदाज़ा 0.25 और reward 1 हो, तो advantage +0.75।",
"h": "17-search-r1-dense.html#w-ppo"
},
"w-ppo": {
"t": "PPO और value model",
"d": "RL का आम तरीका, जो आगे के reward का अंदाज़ा लगाने वाला अलग model (value model) train करता है। जैसे अंदाज़ा 0.25 और reward 1 हो, तो advantage +0.75।",
"h": "17-search-r1-dense.html#w-ppo"
},
"17-search-r1-dense.html#w-grpo": {
"t": "GRPO",
"d": "Group के rewards के औसत और standard deviation से advantage। Value model नहीं चाहिए। जैसे 0, 0, 0, 1 पर औसत 0.25 और standard deviation 0.433।",
"h": "17-search-r1-dense.html#w-grpo"
},
"w-grpo": {
"t": "GRPO",
"d": "Group के rewards के औसत और standard deviation से advantage। Value model नहीं चाहिए। जैसे 0, 0, 0, 1 पर औसत 0.25 और standard deviation 0.433।",
"h": "17-search-r1-dense.html#w-grpo"
},
"17-search-r1-dense.html#w-std": {
"t": "Standard deviation",
"d": "Numbers के फैलाव का नाप: औसत से फ़र्कों के squares का औसत, फिर square root। जैसे 0, 0, 0, 1 पर औसत 0.25, squares 0.5625, 0.0625, 0.0625, 0.0625, उनका औसत 0.1875, और square root 0.433।",
"h": "17-search-r1-dense.html#w-std"
},
"w-std": {
"t": "Standard deviation",
"d": "Numbers के फैलाव का नाप: औसत से फ़र्कों के squares का औसत, फिर square root। जैसे 0, 0, 0, 1 पर औसत 0.25, squares 0.5625, 0.0625, 0.0625, 0.0625, उनका औसत 0.1875, और square root 0.433।",
"h": "17-search-r1-dense.html#w-std"
},
"17-search-r1-dense.html#w-kl": {
"t": "Reference LLM और KL penalty",
"d": "Training से पहले वाले model की जमी हुई copy, और नए model को उससे दूर जाने से रोकने वाली penalty। जैसे &lt;search&gt; की probability 0.2 से 0.9 हो जाए, तो penalty बड़ी है।",
"h": "17-search-r1-dense.html#w-kl"
},
"w-kl": {
"t": "Reference LLM और KL penalty",
"d": "Training से पहले वाले model की जमी हुई copy, और नए model को उससे दूर जाने से रोकने वाली penalty। जैसे &lt;search&gt; की probability 0.2 से 0.9 हो जाए, तो penalty बड़ी है।",
"h": "17-search-r1-dense.html#w-kl"
},
"17-search-r1-dense.html#w-expect": {
"t": "Expected value, 𝔼[ · ]",
"d": "हर नतीजे को उसकी probability से गुणा करके जोड़ना, यानी बहुत सारे rollouts पर औसत। जैसे 0.6 × 1 + 0.4 × 0 = 0.6।",
"h": "17-search-r1-dense.html#w-expect"
},
"w-expect": {
"t": "Expected value, 𝔼[ · ]",
"d": "हर नतीजे को उसकी probability से गुणा करके जोड़ना, यानी बहुत सारे rollouts पर औसत। जैसे 0.6 × 1 + 0.4 × 0 = 0.6।",
"h": "17-search-r1-dense.html#w-expect"
},
"17-search-r1-dense.html#w-kldiv": {
"t": "KL divergence",
"d": "ln(नई probability ÷ reference की probability) का औसत, नए model की probabilities से तौला हुआ। जैसे 0.2 और 0.8 से 0.9 और 0.1 पर 1.146, और 0.25 और 0.75 पर 0.007।",
"h": "17-search-r1-dense.html#w-kldiv"
},
"w-kldiv": {
"t": "KL divergence",
"d": "ln(नई probability ÷ reference की probability) का औसत, नए model की probabilities से तौला हुआ। जैसे 0.2 और 0.8 से 0.9 और 0.1 पर 1.146, और 0.25 और 0.75 पर 0.007।",
"h": "17-search-r1-dense.html#w-kldiv"
},
"17-search-r1-dense.html#w-ratio": {
"t": "Probability ratio",
"d": "π<sub>θ</sub>(token) ÷ π<sub>old</sub>(token), यानी token की probability rollout बनाने वाले model के मुकाबले कितने गुना है। जैसे 0.55 ÷ 0.5 = 1.1।",
"h": "17-search-r1-dense.html#w-ratio"
},
"w-ratio": {
"t": "Probability ratio",
"d": "π<sub>θ</sub>(token) ÷ π<sub>old</sub>(token), यानी token की probability rollout बनाने वाले model के मुकाबले कितने गुना है। जैसे 0.55 ÷ 0.5 = 1.1।",
"h": "17-search-r1-dense.html#w-ratio"
},
"17-search-r1-dense.html#w-clip": {
"t": "Clipping और ε",
"d": "Ratio को 1 − ε से 1 + ε के बीच रोकना, और फिर min से छोटा term लेना। जैसे ε = 0.2 और A = +1.73 पर ratio 1.5 का term 2.076 पर रुकता है।",
"h": "17-search-r1-dense.html#w-clip"
},
"w-clip": {
"t": "Clipping और ε",
"d": "Ratio को 1 − ε से 1 + ε के बीच रोकना, और फिर min से छोटा term लेना। जैसे ε = 0.2 और A = +1.73 पर ratio 1.5 का term 2.076 पर रुकता है।",
"h": "17-search-r1-dense.html#w-clip"
},
"17-search-r1-dense.html#w-mask": {
"t": "Retrieved token masking",
"d": "Training का हिसाब सिर्फ़ model के लिखे tokens पर, और &lt;information&gt; के tokens बाहर। जैसे slide के trace में 430 में से 114 शब्द। Mask हटाने पर औसत 0.431 से 0.343।",
"h": "17-search-r1-dense.html#w-mask"
},
"w-mask": {
"t": "Retrieved token masking",
"d": "Training का हिसाब सिर्फ़ model के लिखे tokens पर, और &lt;information&gt; के tokens बाहर। जैसे slide के trace में 430 में से 114 शब्द। Mask हटाने पर औसत 0.431 से 0.343।",
"h": "17-search-r1-dense.html#w-mask"
},
"17-search-r1-dense.html#w-gae": {
"t": "GAE",
"d": "Generalized advantage estimation: हर कदम पर δ = reward + अगला अंदाज़ा − यह अंदाज़ा, और आगे के सारे δ का जोड़। γ = λ = 1 पर advantage = reward − V, जैसे 1 − 0.3 = 0.7।",
"h": "17-search-r1-dense.html#w-gae"
},
"w-gae": {
"t": "GAE",
"d": "Generalized advantage estimation: हर कदम पर δ = reward + अगला अंदाज़ा − यह अंदाज़ा, और आगे के सारे δ का जोड़। γ = λ = 1 पर advantage = reward − V, जैसे 1 − 0.3 = 0.7।",
"h": "17-search-r1-dense.html#w-gae"
},
"17-search-r1-dense.html#w-rejsamp": {
"t": "Rejection sampling",
"d": "हर सवाल पर कई rollouts बनाना, और सिर्फ़ सही जवाब वालों पर fine-tune करना। जैसे paper में हर सवाल पर 5 rollouts, और 7 datasets का औसत 0.348।",
"h": "17-search-r1-dense.html#w-rejsamp"
},
"w-rejsamp": {
"t": "Rejection sampling",
"d": "हर सवाल पर कई rollouts बनाना, और सिर्फ़ सही जवाब वालों पर fine-tune करना। जैसे paper में हर सवाल पर 5 rollouts, और 7 datasets का औसत 0.348।",
"h": "17-search-r1-dense.html#w-rejsamp"
},
"18-failure-modes-dense.html#w-stale": {
"t": "Stale index",
"d": "Document बदल गया, लेकिन index में पुराना passage और embedding पड़ा है। जैसे index में Tuesday 4pm, जबकि office hour Wednesday 2pm पर जा चुका।",
"h": "18-failure-modes-dense.html#w-stale"
},
"w-stale": {
"t": "Stale index",
"d": "Document बदल गया, लेकिन index में पुराना passage और embedding पड़ा है। जैसे index में Tuesday 4pm, जबकि office hour Wednesday 2pm पर जा चुका।",
"h": "18-failure-modes-dense.html#w-stale"
},
"18-failure-modes-dense.html#w-permleak": {
"t": "Permission leak",
"d": "Retriever ऐसा passage लाए, जिसे इस user को देखने की इजाज़त नहीं। जैसे student को दूसरों के grades।",
"h": "18-failure-modes-dense.html#w-permleak"
},
"w-permleak": {
"t": "Permission leak",
"d": "Retriever ऐसा passage लाए, जिसे इस user को देखने की इजाज़त नहीं। जैसे student को दूसरों के grades।",
"h": "18-failure-modes-dense.html#w-permleak"
},
"18-failure-modes-dense.html#w-lostmiddle": {
"t": "Lost in the middle",
"d": "LLM लंबे prompt के बीच की बात कम इस्तेमाल करता है (position bias)। जैसे 20 passages में पहली जगह पर 75.8% सही, और 10वीं पर 53.8%।",
"h": "18-failure-modes-dense.html#w-lostmiddle"
},
"w-lostmiddle": {
"t": "Lost in the middle",
"d": "LLM लंबे prompt के बीच की बात कम इस्तेमाल करता है (position bias)। जैसे 20 passages में पहली जगह पर 75.8% सही, और 10वीं पर 53.8%।",
"h": "18-failure-modes-dense.html#w-lostmiddle"
},
"18-failure-modes-dense.html#w-distraction": {
"t": "Distraction",
"d": "मिलता-जुलता लेकिन बेकार passage reader को भटका दे। जैसे 2024 का पुराना forum post।",
"h": "18-failure-modes-dense.html#w-distraction"
},
"w-distraction": {
"t": "Distraction",
"d": "मिलता-जुलता लेकिन बेकार passage reader को भटका दे। जैसे 2024 का पुराना forum post।",
"h": "18-failure-modes-dense.html#w-distraction"
},
"18-failure-modes-dense.html#w-conflict": {
"t": "Evidence conflict",
"d": "दो sources, या source और model के parameters, अलग बात कहें। जैसे Week 6 और Week 7।",
"h": "18-failure-modes-dense.html#w-conflict"
},
"w-conflict": {
"t": "Evidence conflict",
"d": "दो sources, या source और model के parameters, अलग बात कहें। जैसे Week 6 और Week 7।",
"h": "18-failure-modes-dense.html#w-conflict"
},
"18-failure-modes-dense.html#w-compounding": {
"t": "Compounding error",
"d": "पहले कदम की गलती आगे के हर कदम में जाए। जैसे हर कदम 0.9 पर सही हो, तो 3 कदम 0.729, और 5 कदम 0.59।",
"h": "18-failure-modes-dense.html#w-compounding"
},
"w-compounding": {
"t": "Compounding error",
"d": "पहले कदम की गलती आगे के हर कदम में जाए। जैसे हर कदम 0.9 पर सही हो, तो 3 कदम 0.729, और 5 कदम 0.59।",
"h": "18-failure-modes-dense.html#w-compounding"
},
"18-failure-modes-dense.html#w-stopping": {
"t": "No stopping rule",
"d": "Agent को रुकने की साफ़ शर्त न पता हो। जैसे एक सवाल पर 15 searches।",
"h": "18-failure-modes-dense.html#w-stopping"
},
"w-stopping": {
"t": "No stopping rule",
"d": "Agent को रुकने की साफ़ शर्त न पता हो। जैसे एक सवाल पर 15 searches।",
"h": "18-failure-modes-dense.html#w-stopping"
},
"18-failure-modes-dense.html#w-injection": {
"t": "Prompt injection",
"d": "ढूँढे गए text में लिखी बात agent के लिए हुक्म बन जाए। जैसे post में छिपा <q>Ignore previous instructions</q>।",
"h": "18-failure-modes-dense.html#w-injection"
},
"w-injection": {
"t": "Prompt injection",
"d": "ढूँढे गए text में लिखी बात agent के लिए हुक्म बन जाए। जैसे post में छिपा <q>Ignore previous instructions</q>।",
"h": "18-failure-modes-dense.html#w-injection"
},
"18-failure-modes-dense.html#w-incremental": {
"t": "Incremental re-indexing",
"d": "पूरा index दोबारा बनाने की जगह सिर्फ़ नए और बदले passages के embeddings बनाना, और बदले document के पुराने passages हटाना। जैसे 60,000 की जगह 500 + 30 = 530 embeddings।",
"h": "18-failure-modes-dense.html#w-incremental"
},
"w-incremental": {
"t": "Incremental re-indexing",
"d": "पूरा index दोबारा बनाने की जगह सिर्फ़ नए और बदले passages के embeddings बनाना, और बदले document के पुराने passages हटाना। जैसे 60,000 की जगह 500 + 30 = 530 embeddings।",
"h": "18-failure-modes-dense.html#w-incremental"
},
"18-failure-modes-dense.html#w-prefilter": {
"t": "Pre-filter और post-filter",
"d": "Pre-filter मना वाले passages ranking से पहले हटाता है, और post-filter top-K निकालने के बाद। जैसे top-14 में 5 मना वाले हों, तो post-filter के बाद 9 बचते हैं।",
"h": "18-failure-modes-dense.html#w-prefilter"
},
"w-prefilter": {
"t": "Pre-filter और post-filter",
"d": "Pre-filter मना वाले passages ranking से पहले हटाता है, और post-filter top-K निकालने के बाद। जैसे top-14 में 5 मना वाले हों, तो post-filter के बाद 9 बचते हैं।",
"h": "18-failure-modes-dense.html#w-prefilter"
},
"18-failure-modes-dense.html#w-primacy": {
"t": "Primacy और recency bias",
"d": "LLM का prompt की शुरुआत (primacy) और आख़िर (recency) की बातें ज़्यादा इस्तेमाल करना। जैसे 20 passages में पहली जगह पर 75.8%, आख़िरी पर 63.2%, और 10वीं पर 53.8%।",
"h": "18-failure-modes-dense.html#w-primacy"
},
"w-primacy": {
"t": "Primacy और recency bias",
"d": "LLM का prompt की शुरुआत (primacy) और आख़िर (recency) की बातें ज़्यादा इस्तेमाल करना। जैसे 20 passages में पहली जगह पर 75.8%, आख़िरी पर 63.2%, और 10वीं पर 53.8%।",
"h": "18-failure-modes-dense.html#w-primacy"
}
};
