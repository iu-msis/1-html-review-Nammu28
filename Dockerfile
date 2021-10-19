FROM php:7.4-apache

LABEL maintainer="Namrata Mahesh"

RUN docker-php-ext-install pdo_mysql

COPY docker/php/php.ini /usr/local/etc/php/php.ini
COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf