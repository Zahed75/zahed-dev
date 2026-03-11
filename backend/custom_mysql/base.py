# Custom MySQL backend that bypasses Django 6.0 compatibility checks for MariaDB 10.4.
# Django 6.0 requires MariaDB 10.6+ and uses RETURNING clause (needs 10.5+).
# This backend patches those checks so the server runs on XAMPP's bundled MariaDB 10.4.

from django.db.backends.mysql.base import DatabaseWrapper as MySQLDatabaseWrapper
from django.db.backends.mysql.features import DatabaseFeatures as MySQLDatabaseFeatures


class DatabaseFeatures(MySQLDatabaseFeatures):
    """
    Override features so Django 6 doesn't generate RETURNING SQL that
    MariaDB 10.4 doesn't understand.
    """

    @property
    def can_return_columns_from_insert(self):
        """MariaDB 10.4 doesn't support RETURNING; tell Django not to use it."""
        return False

    @property
    def can_return_rows_from_bulk_insert(self):
        """MariaDB 10.4 doesn't support RETURNING; tell Django not to use it."""
        return False


class DatabaseWrapper(MySQLDatabaseWrapper):
    """
    Custom wrapper that:
    1. Skips the MariaDB version check entirely.
    2. Uses our patched DatabaseFeatures so Django never emits RETURNING clauses.
    """

    features_class = DatabaseFeatures

    def check_database_version_supported(self):
        """
        Bypass Django 6's MariaDB 10.6+ version requirement.
        Remove this file once XAMPP/MariaDB is upgraded to 10.6+.
        """
        pass
