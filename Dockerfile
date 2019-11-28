FROM node:10-stretch
LABEL maintainer="eadwinCode"

RUN apt-get update \
    && apt-get install -y python python-dev python-pip \
    && apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/*


ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

WORKDIR /home/docker/code

ADD requirements.txt /home/docker/code
ADD package.json /home/docker/code

RUN pip install --no-cache-dir -r requirements.txt
RUN npm install && npm install -g parcel

COPY . /home/docker/code/

EXPOSE 80

CMD ["python", "manage.py", "runserver"]