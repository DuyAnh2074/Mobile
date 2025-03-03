import pandas as pd
import math

def load_data(file_path):
    return pd.read_csv(file_path)

def calculate_entropy(data):
    total = len(data)
    value_counts = data.value_counts()
    entropy = -sum((count/total) * math.log2(count/total) for count in value_counts)
    return entropy

def calculate_gain(data, attribute, target):
    total_entropy = calculate_entropy(data[target])
    values = data[attribute].unique()
    weighted_entropy = sum((len(subset)/len(data)) * calculate_entropy(subset[target]) for value in values if (subset := data[data[attribute] == value]))
    gain = total_entropy - weighted_entropy
    return gain

def id3(data, target, attributes):
    if len(data[target].unique()) == 1:
        return data[target].values[0]
    if not attributes:
        return data[target].mode().values[0]

    gains = {attr: calculate_gain(data, attr, target) for attr in attributes}
    best_attr = max(gains, key=gains.get)
    tree = {best_attr: {}}
    attributes = [attr for attr in attributes if attr != best_attr]

    for value in data[best_attr].unique():
        subset = data[data[best_attr] == value]
        subtree = id3(subset, target, attributes)
        tree[best_attr][value] = subtree

    return tree

def predict(tree, sample):
    if isinstance(tree, dict):
        attribute = next(iter(tree))
        value = sample[attribute]
        return predict(tree[attribute].get(value, max(tree[attribute], key=lambda k: tree[attribute][k])), sample)
    else:
        return tree

# Example usage
data = load_data('data.csv')
attributes = list(data.columns[:-1])
target = data.columns[-1]
decision_tree = id3(data, target, attributes)
sample = {'attribute1': 'giá trị cụ thể 1', 'attribute2': 'giá trị cụ thể 2'}
prediction = predict(decision_tree, sample)
print('Prediction:', prediction)
