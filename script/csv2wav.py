import csv
import numpy as np
import wave
import sys

# CSVファイルからデータを読み取ります
def read_csv(csv_file):
    data = []
    with open(csv_file, 'r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            data.append([float(row[0]), float(row[1]), float(row[2])])  # CSVファイルの各行からデータを読み取り、floatに変換します
    return data

# WAVファイルにデータを書き込みます
def write_wav(wav_file, data, sample_rate=6000):
    with wave.open(wav_file, 'w') as file:
        file.setparams((2, 4, sample_rate, 0, 'NONE', 'not compressed'))  # チャンネル数=2（ステレオ）、サンプル幅=2バイト
        for row in data:
            row_stereo_data = np.column_stack((row[0] * 1000 * 500, row[1] * 1000 * 500))
            file.writeframes(np.int32(row_stereo_data))  # データを32ビット符号付き整数に変換して書き込みます

if __name__ == "__main__":
    file_name = sys.argv[1]
    csv_file = file_name  # 入力CSVファイル名
    wav_file = f"{file_name[:file_name.rfind('.')]}.wav"  # 出力WAVファイル名

    # CSVファイルからデータを読み取ります
    data = read_csv(csv_file)

    # WAVファイルにデータを書き込みます
    write_wav(wav_file, data)